import React, { useState } from 'react'

import Topbar from '../../components/TopBar/topbar'
import Title from '../../components/Title/title'
import StoryInput from '../../components/StoryInput/storyInput'
import DeveloperInput from '../../components/DeveloperInput/developerInput'
import InputForm from '../../components/InputForm'

export default function Home() {
  return (
    <>
      <Topbar />
      <Title />
      <InputForm />
    </>
  )
}
