import TypeDoc from 'typedoc'
import { globby } from 'globby'

async function main() {
  const files = await globby(
    [
      'types/**/*.d.ts',
    ]
  )

  const app = new TypeDoc.Application()

  // load tsconfig.json
  // option reader that discovers user configuration and converts it to the TypeDoc format
  app.options.addReader(new TypeDoc.TSConfigReader()) 
  // obtains option values from typedoc.json
  app.options.addReader(new TypeDoc.TypeDocReader())

  app.bootstrap({
    // typedoc options here
    entryPoints: files.flat(),
  })

  app.options.setCompilerOptions(files.flat(), {
    // https://www.typescriptlang.org/tsconfig#esModuleInterop
    esModuleInterop: true
  }, [{"path": "./"}])

  const project = app.convert()

  if (project) {
    // project may not have converted correctly
    await app.generateDocs(project, 'docs')
  }
}

main().catch(console.error)
