export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb0b4ca5bd2be44bbb10cc',
                  title: 'Sanity Studio',
                  name: 'next-survey-studio',
                  apiId: '0f2e3f0f-8697-4297-ae76-d1a2a7b117a8'
                },
                {
                  buildHookId: '5ebb0b4cff8e46fbaa3db573',
                  title: 'Landing pages Website',
                  name: 'next-survey',
                  apiId: '4a421ce2-5017-4213-a7d0-b6250885aec9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/next-survey',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-survey.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
