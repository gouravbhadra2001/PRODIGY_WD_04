const site_links = [
    "https://prodigy-wd-01-pi.vercel.app/",
    "https://prodigy-wd-03-whgx.vercel.app/",
    "https://prodigy-wd-03.vercel.app/",
    "https://prodigy-wd-04-lqu1.vercel.app/"
]

const repo_links = ['https://github.com/gouravbhadra2001/PRODIGY_WD_01.git',
    'https://github.com/gouravbhadra2001/PRODIGY_WD_02.git',
    'https://github.com/gouravbhadra2001/PRODIGY_WD_03.git',
    'https://github.com/gouravbhadra2001/PRODIGY_WD_05.git'
]

const navigators_for_site = document.querySelectorAll('.visit')
const navigators_for_repo = document.querySelectorAll('.getcode')

navigators_for_site.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        window.open(site_links[index])
    })
})

navigators_for_repo.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        window.open(repo_links[index])
    })
})
