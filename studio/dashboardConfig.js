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
                  buildHookId: '5fd5073d2a4b8d2a329d9642',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q1roijjp',
                  apiId: '24c93215-5531-44f1-b558-7bc648f6c10b'
                },
                {
                  buildHookId: '5fd5073d2a4b8d302a9d9258',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zjmknztg',
                  apiId: '5f4a331d-aecd-4f96-b71f-dc26ee0d1f53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gleithe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zjmknztg.netlify.app', category: 'apps'}
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
