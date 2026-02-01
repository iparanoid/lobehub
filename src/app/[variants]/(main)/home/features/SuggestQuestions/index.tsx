'use client';

import { Lightbulb } from 'lucide-react';
import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { StarterMode } from '@/store/home';

import GroupBlock from '../components/GroupBlock';
import ScrollShadowWithButton from '../components/ScrollShadowWithButton';
import List from './List';
import SuggestQuestionsSkeleton from './Skeleton';

interface SuggestQuestionsProps {
  mode: StarterMode;
}

const SuggestQuestions = memo<SuggestQuestionsProps>(({ mode }) => {
  const { t } = useTranslation('common');

  if (!mode || !['agent', 'group', 'write'].includes(mode)) {
    return null;
  }

  return (
    <GroupBlock icon={Lightbulb} title={t('home.suggestQuestions')}>
      <ScrollShadowWithButton>
        <Suspense fallback={<SuggestQuestionsSkeleton />}>
          <List mode={mode} />
        </Suspense>
      </ScrollShadowWithButton>
    </GroupBlock>
  );
});

export default SuggestQuestions;
