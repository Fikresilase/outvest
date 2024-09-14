"use client";
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What is political investment diversification?",
        subheading: "Political investment diversification allows you to allocate your funds to mirror the investment portfolios of top lawmakers, giving you access to unique market insights and strategies."
    },
    {
        heading: "2. Why invest in politicians' portfolios?",
        subheading: "Politicians often have access to timely information and insights, making their portfolios a great guide for strategic investments. Mimicking their investments could help increase your returns."
    },
    {
        heading: "3. How does diversifying with lawmakers reduce risk?",
        subheading: "By investing in a mix of politicians' portfolios, you spread your risk across different sectors and strategies, which can help protect against market volatility."
    },
    {
        heading: "4. How can I start diversifying with political investments?",
        subheading: "You can choose from a range of politicians to copy, allocate your funds, and diversify your investment to balance risk and maximize potential returns."
    }
]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked Questions</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Discover more about diversifying your portfolio with political investments.</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">
                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;
