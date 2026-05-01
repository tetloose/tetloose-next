export default function plopConfig(plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (kebab-case):'
      },
      {
        type: 'list',
        name: 'folder',
        message: 'Where does this component live?',
        choices: ['atoms', 'molecules', 'components', 'layouts']
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: '.plop/component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: '.plop/types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.variants.ts',
        templateFile: '.plop/variants.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: '.plop/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.mock.ts',
        templateFile: '.plop/mock.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/{{folder}}/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: '.plop/test.tsx.hbs'
      }
    ]
  })

  plop.setGenerator('service', {
    description: 'Create a new service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Service name (kebab-case):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{kebabCase name}}/{{kebabCase name}}.service.ts',
        templateFile: '.plop/service.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/services/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: '.plop/service-types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/services/{{kebabCase name}}/{{kebabCase name}}.test.ts',
        templateFile: '.plop/service-test.ts.hbs'
      }
    ]
  })

  plop.setGenerator('util', {
    description: 'Create a new utility',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Utility name (kebab-case):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{kebabCase name}}/{{kebabCase name}}.utils.ts',
        templateFile: '.plop/util.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/utils/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: '.plop/util-types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/utils/{{kebabCase name}}/{{kebabCase name}}.test.ts',
        templateFile: '.plop/util-test.ts.hbs'
      }
    ]
  })

  plop.setGenerator('hook', {
    description: 'Create a new hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (kebab-case, without "use" prefix):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{kebabCase name}}/use-{{kebabCase name}}.hooks.ts',
        templateFile: '.plop/hook.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/{{kebabCase name}}/use-{{kebabCase name}}.types.ts',
        templateFile: '.plop/hook-types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/{{kebabCase name}}/use-{{kebabCase name}}.test.ts',
        templateFile: '.plop/hook-test.ts.hbs'
      }
    ]
  })

  plop.setGenerator('context', {
    description: 'Create a new context',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Context name (kebab-case, e.g. app):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/context/{{kebabCase name}}/{{kebabCase name}}.context.tsx',
        templateFile: '.plop/context.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/context/{{kebabCase name}}/{{kebabCase name}}.initial.ts',
        templateFile: '.plop/initial.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/context/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: '.plop/context-types.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/context/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: '.plop/context-test.tsx.hbs'
      }
    ]
  })
}
