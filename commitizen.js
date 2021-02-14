'use strict'

module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:      A new feature'
    },
    {
      value: 'fix',
      name: 'fix:       A bug fix'
    },
    {
      value: 'style',
      name: 'style:       A style change'
    },
    {
      value: 'refactor',
      name: 'refactor:       A bug fix,no feature add'
    },
    {
      value: 'perf',
      name: 'perf:       A code change that improves performance'
    },
    {
      value: 'ci',
      name: 'ci:       Change ci config'
    }
  ],
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: 'METADATA:',
  subjectLimit: 72
}
