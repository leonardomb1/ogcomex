import IconFacebook from "./icons/IconFacebook.svelte"
import IconInstagram from "./icons/IconInstagram.svelte"
import IconWhatsApp from "./icons/IconWhatsApp.svelte"
import IconTwitter from "./icons/IconTwitter.svelte"

export const socials = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/yourusername',
        svg: IconFacebook
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        svg: IconTwitter
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/yourusername',
        svg: IconInstagram
    },
    {
        name: 'WhatsApp',
        url: 'https://api.whatsapp.com/send?phone=9999999',
        svg:  IconWhatsApp
    }
]
