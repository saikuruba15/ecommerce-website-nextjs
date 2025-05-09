'use client'

import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import HomeNavbar from '@/components/home-navbar'
import HomeFooter from '@/components/home-footer'
import "../home.css";
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const faqs = [
    {
        question: "1. What do I get with Reacho's free plan?",
        answer:
            "With Reacho, the free plan includes the essentials. You get access to the helpdesk, live chat, and basic support tools to help you get started at no cost.",
    },
    {
        question: "2.  Are there any hidden fees associated with Reacho's free plan?",
        answer:
            "There are no hidden fees or surprise charges. The free plan is completely free.",
    },

    {
        question: "3. Does Reacho integrate with my existing eCommerce platform?",
        answer:
            "  Reacho works natively with popular platforms like Shopify, WooCommerce, and BigCommerce. You can plug it into your existing workflow with ease.",
    },
    {
        question: "4. Is customer support available for free plan users?",
        answer:
            " Yes, free plan users get access to the same customer support team as everyone else. Help is always available when you need it.",
    },
    {
        question: "5. How does Reacho's free plan compare to competitors' paid plans?",
        answer:
            " While tools like Zendesk and Gorgias charge based on features and usage, Reacho offers a full suite of support tools at no cost. You get powerful functionality without the usual price tag.",
    },
    // More questions...
]
const tiers = [
    {
        name: 'Free',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '$0', annually: '$0' },
        description: 'Starting at',
        features: ['50 Tickets',
            'Live Chat (Unlimited Chats)',
            '1 Automation',
            'Branding Included',],
        mostPopular: false,
    },
    {
        name: 'Growth',
        id: 'tier-startup',
        href: '#',
        price: {
            monthly: '$49.99', annually: '$42.49'
        },
        description: 'Starting at',
        features: [
            '500 Tickets',
            'Live Chat (Unlimited Chats)',
            '30 Automations',
            'Voice Channel',
            'SMS Channel',
            'WhatsApp Channel',
            'AI Chatbot',
            '20 MB AI Storage',
            '1,000 AI Responses',
            'Social Channel',
            'Macros',
            'Basic Reports',
            
        ],
        mostPopular: true,
    },
    {
        name: 'Pro',
        id: 'tier-enterprise',
        href: '#',
        price: {
            monthly: '$99.99', annually: '$84.99' },
        description: 'Starting at',
        features: [
            '+ Growth Features',
            '1,000 Tickets',
            '100 Automations',
            '50 MB AI Storage',
            '2,000 AI Responses',
            'Advanced Reports',
            '24/7 Customer Support',
            'No Branding'

        ],
        mostPopular: false,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function pricing() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <>
            <HomeNavbar />
            <div className="bg-gradient-to-b from-[rgba(1,85,248,0.06)] to-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-base/7 font-medium text-indigo-600 uppercase tracking-widest">Pricing Plans</h2>
                        <p className="mt-2 text-balance text-3xl font-semibold tracking-normal !leading-sung text-gray-900 sm:text-6xl">
                            World-class eCommerce support without the price tag
                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-4xl text-pretty text-center text-lg font-light text-gray-600 sm:text-xl/8">
                        Get powerful helpdesk tools, instant live chat, and AI-assisted support tools at a clear, affordable price because great service shouldn't cost a fortune.
                    </p>
                    <div className="mt-16 flex justify-center">
                        <fieldset aria-label="Payment frequency">
                            <RadioGroup
                                value={frequency}
                                onChange={setFrequency}
                                className="grid grid-cols-2 gap-x-2 rounded-lg p-1 bg-gray-950/5 text-center text-sm/5 font-normal ring-1 ring-inset ring-gray-100"
                            >
                                {frequencies.map((option) => (
                                    <Radio
                                        key={option.value}
                                        value={option}
                                        className="flex items-center justify-center font-medium cursor-pointer rounded-lg px-4 py-1 text-gray-500 data-[checked]:bg-white data-[checked]:text-gray-700"
                                    >
                                        <div className='flex gap-x-2 items-center justify-center'>
                                            {option.label}
                                            {option.value === 'annually' && (
                                                <span className="badge badge-light-primary !bg-[#e0eafc] text-[10px] font-semibold px-1.5 py-0.5 rounded-lg">
                                                    15% OFF
                                                </span>
                                            )}
                                        </div>
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </fieldset>
                    </div>
                    <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={classNames(
                                    tier.mostPopular ? 'ring-1 ring-primary bg-gradient-to-b from-[#c6d7fe] via-[#e3ebff] to-[#fff] via-15% to-50%' : 'ring-1 ring-gray-200',
                                    'rounded-3xl p-8 xl:p-10 bg-white'
                                )}
                            >
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.mostPopular ? 'text-primary' : 'text-gray-900',
                                            'text-xl font-medium'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-normal text-indigo-600">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="text-base text-gray-600 font-light">{tier.description}</p>
                                <p className="mt-4 flex items-baseline gap-x-1">
                                    <span className="text-5xl font-normal tracking-tight text-gray-900">
                                        {tier.price[frequency.value as 'monthly' | 'annually']}
                                    </span>
                                    <span className="text-sm/6 font-light text-primary">per user/month</span>
                                </p>
                                {/* <p className='text-primary text-sm py-4'>per user{frequency.priceSuffix}</p> */}
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        tier.mostPopular
                                            ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                                            : 'text-gray-600 ring-1 ring-inset ring-gray-200 hover:ring-gray-200 hover:bg-blue-500 hover:text-white',
                                        'mt-6 block rounded-md px-3 py-2.5 text-center text-base font-normal uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                    )}
                                >
                                    {tier.name === "Free" ? "FREE" : "SUBSCRIBE"}
                                </a>
                                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 font-light xl:mt-10">
                                    {tier.features.map((feature, index) => (
                                        <li
                                            key={feature}
                                            className={classNames(
                                                "flex gap-x-3",
                                                tier.name === "Pro" && index === 0 ? "flex gap-x-3 font-medium text-primary" : ""
                                            )}
                                        >
                                            {!(tier.name === "Pro" && index === 0) && (
                                                <svg
                                                    className="h-4 w-4 flex-none fill-current text-blue-500 mt-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 45 45"
                                                >
                                                    <path d="M22.5.5C10.35.5.5,10.35.5,22.5s9.85,22,22,22,22-9.85,22-22S34.65.5,22.5.5ZM33.286,17.801l-12.508,12.508c-.413.413-.972.645-1.555.645s-1.143-.232-1.555-.645l-5.954-5.954c-.859-.859-.859-2.252,0-3.111.859-.859,2.253-.859,3.111,0l4.398,4.399 10.952-10.953c.859-.859,2.252-.859,3.111,0,.859.859.859,2.252,0,3.111Z" />
                                                </svg>
                                            )}
                                            {feature}
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section>
                <div className="bg-white container">
                    <div className="mx-auto px-6 pb-14 sm:pb-12 lg:px-8 lg:pb-20">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-10 divide-y divide-gray-900/10">
                            {faqs.map((faq) => (
                                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                            <span className="text-base font-light">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                                <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </dt>
                                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                                        <p className="text-base text-gray-600 font-light">{faq.answer}</p>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <HomeFooter />
        </>
    )
}
