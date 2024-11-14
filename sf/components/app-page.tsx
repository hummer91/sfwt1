'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Upload, Mail } from 'lucide-react'

export function BlockPage() {
  const [language, setLanguage] = useState('en')

  const text = {
    en: {
      companyIntro: "About",
      product: "Product",
      pricing: "Pricing",
      contact: "Contact",
      aboutTitle: "About Us",
      aboutContent: "SFLabs provides innovative solutions using cutting-edge AI technology. Our goal is to enrich people's daily lives through the power of technology.",
      productTitle: "AI Face Reading",
      productDescription: "Discover your fortune with just one photo",
      productContent: "Using state-of-the-art AI technology, we analyze users' photos and provide face reading results. Discover your personality, talents, and potential with just one photo.",
      uploadPhoto: "Upload Photo",
      comingSoon: "Coming soon",
      pricingTitle: "Pricing",
      basicPlan: "Basic Plan",
      proPlan: "Pro Plan",
      enterprisePlan: "Enterprise Plan",
      month: "/month",
      inquiry: "Inquiry",
      basicFeatures: ["10 face readings per month", "Basic report provided"],
      proFeatures: ["50 face readings per month", "Detailed report provided", "Email support"],
      enterpriseFeatures: ["Unlimited face readings", "Customized reports", "Dedicated support team"],
      contactTitle: "Contact Us",
      contactContent: "Want to know more about our product or need a custom solution? Contact our sales team.",
      contactSales: "Contact Sales",
      email: "Email:",
      footer: "Discover your potential with AI technology",
      language: "한국어"
    },
    ko: {
      companyIntro: "회사 소개",
      product: "제품",
      pricing: "가격",
      contact: "문의하기",
      aboutTitle: "회사 소개",
      aboutContent: "SFLabs는 최첨단 AI 기술을 활용하여 혁신적인 솔루션을 제공합니다. 우리의 목표는 기술의 힘으로 사람들의 일상을 더욱 풍요롭게 만드는 것입니다.",
      productTitle: "AI 관상 분석",
      productDescription: "사진 한 장으로 당신의 운세를 알아보세요",
      productContent: "최첨단 AI 기술을 활용하여 사용자의 사진을 분석하고 관상을 봐드립니다. 단 한 장의 사진으로 당신의 성격, 재능, 그리고 잠재력을 발견해보세요.",
      uploadPhoto: "사진 업로드",
      comingSoon: "곧 제공 예정",
      pricingTitle: "가격 안내",
      basicPlan: "기본 플랜",
      proPlan: "프로 플랜",
      enterprisePlan: "기업 플랜",
      month: "/월",
      inquiry: "문의",
      basicFeatures: ["월 10회 관상 분석", "기본 리포트 제공"],
      proFeatures: ["월 50회 관상 분석", "상세 리포트 제공", "이메일 지원"],
      enterpriseFeatures: ["무제한 관상 분석", "맞춤형 리포트", "전담 지원팀"],
      contactTitle: "문의하기",
      contactContent: "제품에 대해 더 알고 싶으시거나 맞춤 솔루션이 필요하신가요? 저희 영업팀에 문의해주세요.",
      contactSales: "영업팀 문의하기",
      email: "이메일:",
      footer: "AI 기술로 당신의 잠재력을 발견하세요",
      language: "English"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">SFLabs</h1>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-700 hover:text-gray-900">{text[language].companyIntro}</a></li>
              <li><a href="#product" className="text-gray-700 hover:text-gray-900">{text[language].product}</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-gray-900">{text[language].pricing}</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">{text[language].contact}</a></li>
            </ul>
            <div className="flex items-center space-x-2">
              <Switch
                id="language-toggle"
                checked={language === 'ko'}
                onCheckedChange={() => setLanguage(language === 'en' ? 'ko' : 'en')}
              />
              <label htmlFor="language-toggle" className="text-sm">
                {text[language].language}
              </label>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{text[language].aboutTitle}</h2>
          <p className="text-gray-700 text-lg">
            {text[language].aboutContent}
          </p>
        </section>

        <section id="product" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{text[language].product}</h2>
          <Card className="bg-white bg-opacity-70 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl">{text[language].productTitle}</CardTitle>
              <CardDescription className="text-lg">{text[language].productDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6 text-lg">
                {text[language].productContent}
              </p>
              <div className="flex items-center space-x-2">
                <Button asChild size="lg" disabled>
                  <label className="cursor-not-allowed">
                    <Upload className="mr-2 h-5 w-5" /> {text[language].uploadPhoto}
                  </label>
                </Button>
                <span className="text-sm text-gray-500">{text[language].comingSoon}</span>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{text[language].pricingTitle}</h2>
          <Card className="bg-white bg-opacity-70 backdrop-blur-md">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{text[language].basicPlan}</h3>
                  <p className="text-3xl font-bold mb-4">₩9,900<span className="text-sm font-normal">{text[language].month}</span></p>
                  <ul className="list-disc list-inside text-gray-700">
                    {text[language].basicFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="border p-4 rounded-lg bg-purple-100">
                  <h3 className="text-xl font-semibold mb-2">{text[language].proPlan}</h3>
                  <p className="text-3xl font-bold mb-4">₩19,900<span className="text-sm font-normal">{text[language].month}</span></p>
                  <ul className="list-disc list-inside text-gray-700">
                    {text[language].proFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{text[language].enterprisePlan}</h3>
                  <p className="text-3xl font-bold mb-4">{text[language].inquiry}</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {text[language].enterpriseFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{text[language].contactTitle}</h2>
          <Card className="bg-white bg-opacity-70 backdrop-blur-md">
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4 text-lg">
                {text[language].contactContent}
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                {text[language].contactSales}
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                {text[language].email} <a href="mailto:operations@sflabs.io" className="text-blue-600 hover:underline">operations@sflabs.io</a>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2023 SFLabs. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">{text[language].footer}</p>
        </div>
      </footer>
    </div>
  )
}