import { Hero } from '@/components/Hero'
import { TrustedTech } from '@/components/TrustedTech'
import { Services } from '@/components/Services'
import { WhyDeployCraft } from '@/components/WhyDeployCraft'
import { Capabilities } from '@/components/Capabilities'
import { EngagementModels } from '@/components/EngagementModels'
import { Process } from '@/components/Process'
import { Industries } from '@/components/Industries'
import { CTA } from '@/components/CTA'

export function Home() {
  return (
    <>
      <Hero />
      <TrustedTech />
      <Services />
      <WhyDeployCraft />
      <Capabilities />
      <EngagementModels />
      <Process />
      <Industries />
      <CTA />
    </>
  )
}
