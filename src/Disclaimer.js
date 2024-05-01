import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiExclamation } from 'react-icons/hi';

const Popover = ({ website, disclaimer }) => {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

    const { trigger, content, outline } = disclaimer;

    let triggerMarkup = null;

    const { type, content: label } = trigger;

    if (type === 'link') {
        triggerMarkup = (
            <p id="#Disclaimer">
                <span>{website.localize(outline)}</span>
                <a onClick={() => setOpen(true)} className="hover:underline ml-1 cursor-pointer">
                    {website.localize(label)}
                </a>
            </p>
        );
    }

    return (
        <>
            {triggerMarkup}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 h-screen">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 max-w-[720px]">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <HiExclamation
                                                className="h-6 w-6 text-blue-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 sm:ml-4 sm:mt-0 text-left">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base text-center font-semibold leading-6 text-gray-900"
                                            >
                                                {website.localize({
                                                    en: 'Disclaimer',
                                                    fr: 'Avertissement'
                                                })}
                                            </Dialog.Title>
                                            <div className="mt-2 flex flex-col gap-2.5">
                                                {content.map((item, index) => {
                                                    return (
                                                        <p
                                                            key={index}
                                                            className="text-sm text-gray-500"
                                                        >
                                                            {website.localize(item)}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            {website.localize({ en: 'Cancel', fr: 'Annuler' })}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default function Disclaimer(props) {
    const [disclaimer, setDisclaimer] = useState(null);

    useEffect(() => {
        uniweb.getAppSettings('site_viewer_disclamer').then((res) => {
            let parsedData = res[0] === '{' ? JSON.parse(res) : res;
            setDisclaimer(parsedData);
        });
    }, []);

    if (!disclaimer) return null;

    const { type } = disclaimer;

    if (type === 'popup') {
        return <Popover {...props} disclaimer={disclaimer} />;
    }

    return null;
}
