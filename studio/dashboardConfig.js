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
                  buildHookId: '5e6a1cb8dbcaf254cabe0b34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7oh8bz11',
                  apiId: '0ad63619-154a-4cf8-92a0-3281bc21e252'
                },
                {
                  buildHookId: '5e6a1cb82250d2543fe8dd0a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nitszwgs',
                  apiId: 'a045a357-7c22-4e07-8d95-99f9844805ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hp-e/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nitszwgs.netlify.com', category: 'apps'}
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
