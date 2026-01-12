import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3, Menu } from 'lucide-react'
import clsx from 'clsx'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTelegramApp, setIsTelegramApp] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    const checkTelegramApp = () => setIsTelegramApp(!!window.Telegram)

    checkMobile()
    checkTelegramApp()

    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const BentoCard = ({ icon: Icon, title, description, wide }) => (
    <motion.div 
      className={clsx(
        'bg-slate-900 rounded-xl p-6 flex flex-col justify-between glow-effect',
        wide ? 'md:col-span-2' : 'col-span-1'
      )}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-between items-center">
        <Icon className="w-10 h-10 text-electric-coffee" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-electric-coffee">{title}</h3>
        <p className="text-sm text-slate-400 mt-2">{description}</p>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-slate-dark-950 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-electric-coffee">CryptoCoffee</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-electric-coffee">Возможности</a>
          <a href="#pricing" className="hover:text-electric-coffee">Тарифы</a>
          {isTelegramApp && <button>Открыть профиль ТГ</button>}
        </nav>
        <Menu className="md:hidden text-electric-coffee" />
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Кофе. Код. Крипто.
          </motion.h1>
          <p className="text-xl text-slate-400 mb-10">Революционная система лояльности нового поколения</p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-electric-gradient px-6 py-3 rounded-full text-white font-bold">Начать работу</button>
            <button className="border border-slate-700 px-6 py-3 rounded-full text-slate-400">Документация</button>
          </div>
        </section>

        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <BentoCard 
              icon={Coffee} 
              title="Smart Order" 
              description="Умный выбор кофе с персонализацией" 
            />
            <BentoCard 
              icon={Wallet} 
              title="Криптовалютные платежи" 
              description="Поддержка TON и Telegram Stars" 
              wide 
            />
            <BentoCard 
              icon={Trophy} 
              title="NFT Лояльность" 
              description="Уникальные цифровые награды" 
            />
            <BentoCard 
              icon={BarChart3} 
              title="Аналитика" 
              description="Real-time статистика продаж" 
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App