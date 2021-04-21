import Link from 'next/link'
import Image from 'next/image'

export default function Post(){
    return (
        <>
        <h1>IP Minion</h1>
        <Link href='/'><a>Back to Home</a></Link>
        <Image src='/minion.jpg' height={500} width={500} alt='Minion'></Image>
        </>
    )
}