import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'mosaics',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Mosaics',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '486238d7-a097-5c5c-aed4-3125d1f36409',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '55dc9af5-2f7e-57e8-aec1-9a5889250732',
    dynasty: {
      item: '486238d7-a097-5c5c-aed4-3125d1f36409',
      name: 'Umayyads',
    },
    timeline: {
      code: 'it',
      id: 'ita',
      country: 'Italy',
    },
    partner: {
      id: 'ee0a71f8-dc12-5d5d-b02a-4402969e8274',
      name: 'Museum of Islamic Art',
      city: 'Kairouan',
      country: 'Tunisia',
      objects: 1,
    },
  },
})
