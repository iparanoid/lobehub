'use client';

import { memo } from 'react';

import GroupSkeleton from '../components/GroupSkeleton';

const SuggestQuestionsSkeleton = memo(() => {
  return <GroupSkeleton height={100} width={200} />;
});

export default SuggestQuestionsSkeleton;
