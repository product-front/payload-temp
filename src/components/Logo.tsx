'use client'

import React from 'react'
import { useTheme } from '@payloadcms/ui'
import logoLight from '@/assets/logo.svg'
import logoDark from '@/assets/logo-light.svg'
import Image from 'next/image'

export const Logo: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Image width={200} src={theme === 'dark' ? logoDark : logoLight} alt="logo" />
    </div>
  )
}
