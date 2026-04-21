'use client'

import React from 'react'
import { useTheme } from '@payloadcms/ui'
import logoLight from '@/assets/logo.svg'
import logoDark from '@/assets/logo-light.svg'
import Image from 'next/image'

export const Icon: React.FC = () => {
  const { theme } = useTheme()

  return <Image width={24} height={24} src={theme === 'dark' ? logoDark : logoLight} alt="logo" />
}
