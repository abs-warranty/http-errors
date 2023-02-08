import TypeDoc from 'typedoc'
import { globby } from 'globby'

async function main() {
  const files = await globby(
    [
      'src/index.d.ts',
    ],
    {
      absolute: true,
    }
  )

  const app = new TypeDoc.Application()

  // load tsconfig.json
  app.options.addReader(new TypeDoc.TSConfigReader())
  app.options.addReader(new TypeDoc.TypeDocReader())

  app.bootstrap({
    // typedoc options here
    entryPoints: files.flat(),
  })

  app.options.setCompilerOptions(files.flat(), {
    esModuleInterop: true
  }, [{"path": "./"}])

  const project = app.convert()

  if (project) {
    // project may not have converted correctly
    await app.generateDocs(project, 'docs')
  }
}

main().catch(console.error)
