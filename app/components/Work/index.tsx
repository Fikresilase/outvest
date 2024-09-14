"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Choose Politicians',
        subheading: 'Select the politicians whose investment strategies you want to follow.',
        hiddenpara: 'Pick from top lawmakers known for their successful investment strategies to guide your portfolio towards higher returns.',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Allocate Your Money',
        subheading: 'Decide how much of your portfolio to invest based on each politician’s strategy.',
        hiddenpara: 'Strategically allocate your funds across different politicians to balance your portfolio and maximize potential gains.',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Diversify & Grow',
        subheading: 'Invest in multiple lawmakers’ portfolios to reduce risk and grow your wealth.',
        hiddenpara: 'Benefit from diversified investments across different political strategies to minimize risks while boosting returns.',
    },
]


const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it works</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Discover how our platform helps you diversify your investments by following the proven <br /> strategies of top lawmakers. Increase your returns while minimizing risks with ease.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
