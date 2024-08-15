'use client';

import { useTranslation } from '@/i18n/client';

export default function Like(props: { lng: string }) {
  const { lng } = props;
  const { t } = useTranslation(lng, 'basic');
  return <button>{t('like')}</button>;
}
