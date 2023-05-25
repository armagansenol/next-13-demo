import { Marquee } from "@/components/marquee"
import { PageWrapper } from "@/components/page-transition"
import s from "./home.module.scss"

type Props = {}

const Home = (props: Props) => {
  return (
    <PageWrapper>
      <main>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
        <Marquee repeat={5}>
          <h1 className={s.marqueeInner}>HOMEPAGE.</h1>
        </Marquee>
      </main>
    </PageWrapper>
  )
}

export default Home
