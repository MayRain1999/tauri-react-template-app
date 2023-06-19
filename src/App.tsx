import React, { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { Button, Input, ConfigProvider } from 'antd'
import reactLogo from '@/assets/react.svg'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  const greet = async () => {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b'
        }
      }}
    >
      <div className="bg-[#7f8f9f] flex justify-center flex-col gap-6">
        <img src={reactLogo} alt="" className="w-[50px]" />
        <div className="p-6">Welcome to Tauri!</div>
        <Input
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <Button className="h-[30px]" type="primary" onClick={greet}>
          提交
        </Button>
        <p>{greetMsg}</p>
      </div>
    </ConfigProvider>
  )
}

export default App
