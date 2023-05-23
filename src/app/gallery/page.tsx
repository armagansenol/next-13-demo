import GridGallery from "@/components/grid-gallery"

// async function fetchImg() {
//   const res = await fetch("https://api.unsplash.com/photos/", {
//     headers: {
//       Authorization: "Client-ID Ez4Pdxo49342l_yiJs_ilPFY8cTW2hpkxK0AnIzBbLM",
//     },
//   })
//   return res.json()
// }

export default async function Test() {
  const res = await fetch("https://api.unsplash.com/photos/?per_page=30", {
    headers: {
      Authorization: "Client-ID Ez4Pdxo49342l_yiJs_ilPFY8cTW2hpkxK0AnIzBbLM",
    },
  })

  const imgs = await res.json()

  console.log(imgs)

  // const data = await fetchImg()
  // const [imgs] = await Promise.all<any>([fetchImg])

  // const imgus = [
  //   {
  //     url: "https://images.unsplash.com/photo-1682332300122-7cfddb1576c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1684158100445-8e6926faf964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1684254515004-1f84811e887b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1683733150127-4890f25229aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1683667308908-894ed24f9ed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1683141640577-38ec07486cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     width: 500,
  //     height: 500,
  //     alt: "lol",
  //   },
  // ]

  // let urls: string[] = []

  // for (let img of imgs) {
  //   urls.push(img.urls.full)
  // }

  // console.log(urls)

  // useEffect(() => {
  //   fetchImg().then((res) => {
  //     console.log(res)
  //     setImgs([...res])
  //   })
  // }, [])

  return (
    <main>
      <GridGallery contents={imgs} />

      {/* <GridGallery contents={imgus} /> */}
    </main>
  )
}
