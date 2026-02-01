import { Button } from "../Button/Button"

export function OurStory() {
    return (
        <div className="px-[35px]">

            <div>
                <div className="flex w-full px-[15px]">

                    <div className="pt-[150px] w-1/2 flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[20px]">
                            <p className="flex gap-[5px] items-center">

                                <span className="text-[15px] font-semibold">Natural Pet Products</span>
                            </p>
                            <h2 className="font-semibold text-[70px] leading-[70px]">We are a fully
                                committed to your
                                pet's well-being</h2>
                            <p>
                                For over 12 years, we've been dedicated to making pets look
                                fabulous and feel loved. Because to us, your pet isn't just a
                                client - they're family.</p>
                            <div className="flex gap-[20px]">
                                <div className="flex flex-col gap-[10px]">
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Skilled personnel</span>
                                    </p>
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Nutrition and Diet</span>
                                    </p>
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Gromming tips</span>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Best Verterinarians</span>
                                    </p>
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Quality Food</span>
                                    </p>
                                    <p className="flex gap-[5px]">
                                        <img src="/orange-check.png" />
                                        <span>Emergency Care</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <Button variant="secondary" size="md" background="tertColor">Explore Products</Button>
                            <div className="flex gap-[2px]">
                                <img src="/telephone.png"/>
                                <div>
                                    <p> Call us:</p>
                                    <p>+00-(120) 3456 789</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-1/2 mt-[150px] relative">
                        <img src="/our-story-animal.png" />
                        <div className="absolute top-[-5px] right-[-8px]">
                        <img src="/happy-paws.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}