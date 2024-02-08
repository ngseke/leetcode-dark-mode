import { useTranslation } from 'react-i18next'
import { ExtraFeatureOptions } from './ExtraFeatureOptions'
import { LanguageSelect } from './LanguageSelect'
import { OptionTitle } from './OptionTitle'
import { StyleOptions } from './StyleOptions'
import { KofiLink } from './KofiLink'
import { TEST_IDS } from '../../../constants'

const Divider = () => <div className="ts-divider is-section" />

export function Options () {
  const { t } = useTranslation()

  return (
    <div className="ts-content" data-testid={TEST_IDS.optionsTab}>
      <OptionTitle icon="palette">{t('title.style')}</OptionTitle>
      <StyleOptions />
      <Divider />

      <OptionTitle icon="wand-magic-sparkles">{t('title.extraFeature')}</OptionTitle>
      <ExtraFeatureOptions />
      <Divider />

      <OptionTitle icon="language">{t('title.language')}</OptionTitle>
      <LanguageSelect />

      <Divider />
      <KofiLink />
    </div>
  )
}
