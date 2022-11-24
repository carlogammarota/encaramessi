<template>

<main>
    {{test}}
    <section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-10">
        
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            <a href="https://instagram.com/aura.productora">@aura.productora</a>
            #Radio Aura
        </h1>
        <br>
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Argentina vs Mexico</h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Para lograr trasmitir el partido compramos servidores los cuales cuestan dinero, por eso es muy importante su donacion para poder lograr seguir con este servicio. Muchas gracias y disfruten del partido</p>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 xl:mt-12 xl:grid-cols-1 xl:gap-12">
        <div>
            <video width="100%" height="100%" controls>
                <source src="http://64.227.76.217:8080/hls/1234.m3u8" type="application/x-mpegURL">
            </video>
            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Argentina vs Mexico</h2>
            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Encara Messi App by <a href="https://instagram.com/aura.productora" class="hover:text-red-300">@aura.productora</a></p>
        </div>

        <!-- <div>
            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Block of Ui kit collections</h2>
            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Ui kit</p>
        </div> -->

        </div>
    </div>
    

    <!-- <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Portfolio</h1>

        <p class="mt-4 text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus</p>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
        <div>
            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt="" />
            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Best website collections</h2>
            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Website</p>
        </div>

        <div>
            <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">Block of Ui kit collections</h2>
            <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">Ui kit</p>
        </div>

        </div>
    </div> -->
    
    </section>

   

    <section class="bg-white dark:bg-gray-900 pb-24">
        <div class="container mx-auto max-w-4xl px-6 py-5">
            <h1 class="text-center text-4xl font-semibold text-gray-800 dark:text-white">Chat en vivo <div class="lds-hourglass h-2 w-2" v-if="loader"></div></h1>
            <div class="mt-12 space-y-4 overflow-auto chat " ref="messagesContainer" >
                <div v-for="item of data"  class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
                    <!-- {{item}} -->
                    <div class="flex w-full items-center justify-between p-2">
                        <p class="font-semibold text-gray-700 dark:text-white">
                            <img src="~/assets/profile.png" class="w-8 float-left" alt="">
                            <span class="text-white font-bold float-left my-1 ml-2">
                                <span class="text-gray-400">{{item.nombre}}:</span>
                                <span>{{item.data}}</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
      
            <div class="mt-6" v-if="message.nombre">
                <!-- <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe un comentario</label> -->
                <input type="text" v-model="message.data" id="first_name" class="A focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe un mensaje..." required>
                <button v-if="message.data" @click="send()" ref="p" class="w-full py-2 my-4 font-bold bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg">ENVIAR</button>
            </div>
            <div class="mt-12 space-y-4 overflow-auto chat " ref="messagesContainer" v-if="!message.nombre">
                <div class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
                    <div>   
                        <label for="search" class="mb-2 pl-4 text-sm font-medium text-gray-900 sr-only dark:text-white">Ingresa tu Nombre</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <!-- <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
                                <img src="~/assets/profile.png" class="w-8 float-left pr-2" alt=""/>
                            </div>
                            <input type="search" id="search" v-model="setNameString" class="block w-full py-4 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputName" placeholder="Ingresa tu nombre" required>
                            <button @click="setName()" type="submit" class="entrarAlChat text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">Entrar al Chat</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>

    <section class="min-h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
    <div class="container mx-auto flex min-h-screen flex-col px-6 py-12">
        <div class="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div class="text-white lg:mx-6 lg:w-1/2">
            <h1 class="text-3xl font-semibold capitalize lg:text-5xl">Get a quote</h1>

            <p class="mt-6 max-w-xl">Ask us everything and we would love to hear from you</p>

            <div class="mt-6 space-y-8 md:mt-8">
            <p class="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span class="mx-2 w-72 truncate text-white"> Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 </span>
            </p>

            <p class="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <span class="mx-2 w-72 truncate text-white">(257) 563-7401</span>
            </p>

            <p class="-mx-2 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span class="mx-2 w-72 truncate text-white">acb@example.com</span>
            </p>
            </div>

            <div class="mt-6 md:mt-8">
            <h3 class="text-gray-300">Follow us</h3>

            <div class="-mx-1.5 mt-4 flex">
                <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500" href="#">
                <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                </svg>
                </a>

                <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500" href="#">
                <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                </svg>
                </a>

                <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500" href="#">
                <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                </svg>
                </a>

                <a class="mx-1.5 transform text-white transition-colors duration-300 hover:text-blue-500" href="#">
                <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                </svg>
                </a>
            </div>
            </div>
        </div>

        <div class="mt-8 lg:mx-6 lg:w-1/2">
            <div class="mx-auto w-full overflow-hidden rounded-xl bg-white px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">
            <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

            <form class="mt-6">
                <div class="flex-1">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                <input type="text" placeholder="John Doe" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div class="mt-6 flex-1">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input type="email" placeholder="johndoe@example.com" class="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                </div>

                <div class="mt-6 w-full">
                <label class="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea class="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:h-48" placeholder="Message"></textarea>
                </div>

                <button class="mt-6 w-full transform rounded-md bg-blue-600 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">get in touch</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    </section>

    <footer class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 py-12">
        <div class="md:-mx-3 md:flex md:items-center md:justify-between">
        <h1 class="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white md:mx-3 xl:text-4xl">Subscribe our newsletter to get update.</h1>

        <div class="mt-6 shrink-0 md:mx-3 md:mt-0 md:w-auto">
            <a href="#" class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            <span class="mx-2">Sign Up Now</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </a>
        </div>
        </div>

        <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Home</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Who We Are</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Our Philosophy</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Retail & E-Commerce</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Information Technology</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Finance & Insurance</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Services</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Translation</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Proofreading & Editing</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Content Creation</a>
            </div>
        </div>

        <div>
            <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

            <div class="mt-5 flex flex-col items-start space-y-2">
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">+880 768 473 4978</a>
            <a href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">info@merakiui.com</a>
            </div>
        </div>
        </div>

        <hr class="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div class="flex flex-col items-center justify-between sm:flex-row">
        <a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">Brand</a>

        <p class="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">© Copyright 2021. All Rights Reserved.</p>
        </div>
    </div>
    </footer>
</main>
</template>
<style>
.chat {
    max-height: 500px;
}
</style>
<script>
const feathers = require("~/feathers.js")
// import '~messages';
// import axios from "axios"
// const feathers = require('~/feathers.js');
//  import axios from 'axios'
//  const axios = require("axios")
// import axios from 'axios';
export default {
    // asyncData ({ params }) {
    //     return axios.get("http://localhost:3030/messages")
    //     .then((res) => {
    //         console.log("test");
    //         return { test: "res.data" }
    //         // console.log("res", res)
    //         // this.loader = true;
    //         // let mensajes = await feathers.default.messages.find();
    //         // console.log("MENSAJES", mensajes)
    //         // this.data = mensajes.data;
    //         // this.loader = false;
    //         // console.log("data", this.data);
    //     })
    // },
    // async fetch() {
    //     this.test = await axios.$get("http://localhost:3030/messages")
    //     console.log("posts", this.test)
    // },
    data(){
        return {
            test: [],
            message: {
                nombre: "",
                data: "",
            },
            messagesArray: [
                {
                    nombre: "Roberto",
                    data: "Hola!, ¿ como estan ?"
                },
                {
                    nombre: "Jorge",
                    data: "Bien!, ¿ y vos como estas ?"
                },
                {
                    nombre: "Luis",
                    data: "Vamos Argentina!"
                },
                {
                    nombre: "Alberto",
                    data: "Que bien que estamos jugando!"
                },
                {
                    nombre: "Jose",
                    data: "Que vuelva Funes Mori lo necesitamos"
                },
            ], 
            data:[],
            loader: false,
            setNameString: ""
        }
    },
    async mounted(){
        var audio = new Audio('~/assets/file.mp3'); // path to file
        audio.play();


        
        // let data = await $messages.default.messages.find();
        // console.log($messages)

        this.storeGetName();
        this.getMessages();
        this.timing();


    },
    methods: {
        //Esta funcion guarda el nombre en localstorage
        storeName(name) {
            if(process.client) {
                localStorage.setItem("name", name)
            }
        },
        //Esta funcion trae el nombre si esta en localstorage
        storeGetName() {
            if(process.client) {
                let name = localStorage.getItem("name");
                if (name) {
                    console.log("Hay Nombre!", name)
                    this.message.nombre = name;
                }
            }
        },
        setName(){
            if(this.setNameString){
                this.message.nombre = this.setNameString;
                this.storeName(this.message.nombre);
            }
        },
        timing(){
            setInterval(() => {
                console.log("Actualizando");
                this.getMessages();
            }, 5000);
        },
        async getMessages(){
            //Feathers
            this.loader = true;
            let mensajes = await feathers.default.messages.find({
                query: {
                    $limit: 500,
                },
                
            });
            console.log("MENSAJES", mensajes)
            this.data = mensajes.data;
            this.loader = false;
            console.log("data", this.data);
        },
        send(){
          
            console.log(this.messagesArray)

            //Feathers
            this.loader = true;
            feathers.default.messages.create(this.message).then(data => {
                this.loader = false;
                console.log("Sucess!", data);
                this.message.data = "";
                this.getMessages();
			}).catch(err => {
			 	console.log("Error!", err)
			});
        },
        scrollToElement() {
            
            // const el = this.$refs.messagesContainer;

            // if (el) {
                // Use el.scrollIntoView() to instantly scroll to the element
                // el.scrollIntoView({behavior: 'smooth'});
            // }
        }
    }
}
</script>
<style>
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: scale(0.6,0.6);
  margin-top: -10px;
    float: right;
    right: 131px;
    position: absolute;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 2px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

.inputName{
    padding-left: 50px;
    padding-top: 14px;
}

.entrarAlChat{
    font-size: 20px;
    padding: 12px;
}

</style>