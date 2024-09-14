import Image from "next/image";

interface table {
    index: number;
    name: string;
    company: string;
    change: number;
    cap: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "Nancy Pelosi",
        imgSrc: '/images/Table/bitcoin.jpg',
        company: "Apple Inc.",
        change: 3.96,
        cap: 16828.25,
        action: "Buy",
    },
    {
        index: 2,
        name: "Mitch McConnell",
        imgSrc: '/images/Table/cryptoone.jpg',
        company: "Microsoft Corp.",
        change: 3.96,
        cap: 16828.80,
        action: "Buy",
    },
    {
        index: 3,
        name: "Alexandria Ocasio-Cortez",
        imgSrc: '/images/Table/cryptothree.jpg',
        company: "Amazon.com Inc.",
        change: -3.96,
        cap: 16828.30,
        action: "Sell",
    },
    {
        index: 4,
        name: "Kevin McCarthy",
        imgSrc: '/images/Table/cryptotwo.jpg',
        company: "Alphabet Inc.",
        change: -3.96,
        cap: 16828.42,
        action: "Sell",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Market Trend Live Stream</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">NAME</th>
                                <th className="px-4 py-4 font-normal">COMPANY</th>
                                <th className="px-4 py-4 font-normal">CHANGE 24H</th>
                                <th className="px-4 py-4 font-normal">Amount</th>
                                <th className="px-4 py-4 font-normal">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">{items.company}</td>
                                    <td className={`px-4 py-6 text-center ${items.change < 0 ? 'text-red' : 'text-green'} `}>{items.change}%</td>
                                    <td className="px-4 py-6 text-center text-white">${items.cap.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.action === 'Buy' ? 'text-green' : 'text-red'}`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;
