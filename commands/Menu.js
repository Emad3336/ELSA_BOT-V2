//تم تطوير هذا الملف بواسطه باتشيرا

const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb

    //---------------------------------------------------------------------------

cmd({

            pattern: "باتشيرا1",           
            alias :['اوامرالاعضاء'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "1️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*♟️✨シ¦.ايدي*
*♟️✨シ¦.رانك*
*♟️✨シ¦.المتصدرين*
*♟️✨シ¦.كشف*
*♟️✨シ¦.صورته*
*♟️✨シ¦.كونكت*
*♟️✨シ¦طلب*
*♟️✨シ¦.مساعده*
*♟️✨シ¦.السورس*
*♟️✨シ¦.تشفير*
*♟️✨シ¦.حل*
*♟️✨シ¦.ترجم*
*♟️✨シ¦.اكشف*
*♟️✨シ¦.تخمين*
*♟️✨シ¦.زخرفه*
*♟️✨シ¦.اختصار*
*♟️✨シ¦.باتشيرا*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "2باتشيرا",           
            alias :['اوامرالمطور'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "2️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*♟️✨シ¦.انضم*
*♟️✨シ¦.بان*
*♟️✨シ¦.اذاعه*
*♟️✨シ¦.البوت*
*♟️✨シ¦.المده*
*♟️✨シ¦.بينج*
*♟️✨シ¦.فيروس*
*♟️✨シ¦.اخرج*
*♟️✨シ¦.فك-البان*
*♟️✨シ¦.الجروبات*
*♟️✨シ¦.البوت فتح*
*♟️✨シ¦.البوت قفل*
*♟️✨シ¦.المحظورين*
*♟️✨シ¦.ملاحظاتي*
*♟️✨シ¦.ملاحظه*
*♟️✨シ¦.حذف-ملاحظه*
*♟️✨シ¦.حذف-ملاحظاتي*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "باتشيرا3",           
            alias :['اوامرالجروب'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "3️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*♟️✨シ¦.منشن*
*♟️✨シ¦.مخفي*
*♟️✨シ¦.الرابط*
*♟️✨シ¦.اعاده*
*♟️✨シ¦.ترقيه*
*♟️✨シ¦.تخفيض*
*♟️✨シ¦.اضافه*
*♟️✨シ¦.طرد*
*♟️✨シ¦.غادر*
*♟️✨シ¦.حذف*
*♟️✨シ¦.تدمير*
*♟️✨シ¦.ارقام*
*♟️✨シ¦.الترحيب*
*♟️✨シ¦.المغادره*
*♟️✨シ¦.جروب*
*♟️✨シ¦.استطلاع*
*♟️✨シ¦.تفعيل*
*♟️✨シ¦.تعطيل*
*♟️✨シ¦.تغيرالاسم*
*♟️✨シ¦.تغيرالوصف*
*♟️✨シ¦.تغيرالصوره*
*♟️✨シ¦.انذار*
*♟️✨シ¦.حذف-انذار*
*♟️✨シ¦.الانذارات*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    ) 



    //---------------------------------------------------------------------------

cmd({

            pattern: "4باتشيرا",           
            alias :['اوامرالتحميل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "4️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.شغل*
*♟️✨シ¦.فيديو*
*♟️✨シ¦.صوتي*
*♟️✨シ¦.فيد*
*♟️✨シ¦.تطبيق*
*♟️✨シ¦.مود*
*♟️✨シ¦.ملف*
*♟️✨シ¦.بينت*
*♟️✨シ¦.جوجل*
*♟️✨シ¦.بحث*
*♟️✨シ¦.مود*
*♟️✨シ¦.صوره*
*♟️✨シ¦.ويلبر*
*♟️✨シ¦.تليجرام*
*♟️✨シ¦.ميديافاير*
*♟️✨シ¦.طقم*
*♟️✨シ¦.اولاد*
*♟️✨シ¦.خلفيه*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    


    //---------------------------------------------------------------------------

cmd({

            pattern: "5باتشيرا",           
            alias :['اوامرالالعاب'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "5️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.اكس*
*♟️✨シ¦.شخص*
*♟️✨シ¦.شبيهي*
*♟️✨シ¦.نرد*
*♟️✨シ¦.هل*
*♟️✨シ¦.سؤال*
*♟️✨シ¦.ه*
*♟️✨シ¦.كت*
*♟️✨シ¦.احزر*
*♟️✨シ¦.عكس*
*♟️✨シ¦.رابطي*
*♟️✨シ¦.رابطه*
*♟️✨シ¦.علم*
*♟️✨シ¦.تهكير*
*♟️✨シ¦.عض*
*♟️✨シ¦.اضرب*
*♟️✨シ¦.قبل*
*♟️✨シ¦.اقتل*
*♟️✨シ¦.ارقص*
*♟️✨シ¦.حب*
*♟️✨シ¦.كف*
*♟️✨シ¦.كسر*
*♟️✨シ¦.تنمر*
*♟️✨シ¦.ضم*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "6باتشيرا",           
            alias :['اوامرالتحويل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "6️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.ملصق*
*♟️✨シ¦.سرقه*
*♟️✨シ¦.دمج*
*♟️✨シ¦.لصوت*
*♟️✨シ¦.لصوره*
*♟️✨シ¦.اكتب*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )        


    //---------------------------------------------------------------------------

cmd({

            pattern: "باتشيرا7",           
            alias :['اوامرالانمي'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "7️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🧚‍♂️˹ قـسـم الانـمـي┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.وايفو*
*♟️✨シ¦.نيكو*
*♟️✨シ¦.لولي*
*♟️✨シ¦.ناروتو*
*♟️✨シ¦.انمي*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )  
                                           
                                           
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "8باتشيرا",           
            alias :['اوامرالبنك'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "8️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.البنك*
*♟️✨シ¦.محفظتي*
*♟️✨シ¦.اموالي*
*♟️✨シ¦.سحب*
*♟️✨シ¦.ايداع*
*♟️✨シ¦.تحويل*
*♟️✨シ¦.اعطي*
*♟️✨シ¦.تصفير*
*♟️✨シ¦.راتبي*
*♟️✨シ¦.التوب*
*♟️✨シ¦.هجوم*
*♟️✨シ¦.رهان*
*♟️✨シ¦.حظ*
*♟️✨シ¦.ألتوب*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "9باتشيرا",           
            alias :['كل-الاوامر'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "9️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*¦♟️✨━━ •┇✦كـل الاوامـر✦┇• ━━♟️✨¦*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*♟️✨シ¦.ايدي*
*♟️✨シ¦.رانك*
*♟️✨シ¦.المتصدرين*
*♟️✨シ¦.كشف*
*♟️✨シ¦.صورته*
*♟️✨シ¦.كونكت*
*♟️✨シ¦.طلب*
*♟️✨シ¦.مساعده*
*♟️✨シ¦.السورس*
*♟️✨シ¦.تشفير*
*♟️✨シ¦.حل*
*♟️✨シ¦.ترجم*
*♟️✨シ¦.اكشف*
*♟️✨シ¦.تخمين*
*♟️✨シ¦.زخرفه*
*♟️✨シ¦.اختصار*
*♟️✨シ¦.باتشيرا*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.انضم*
*♟️✨シ¦.بان*
*♟️✨シ¦.اذاعه*
*♟️✨シ¦.البوت*
*♟️✨シ¦.المده*
*♟️✨シ¦.بينج*
*♟️✨シ¦.فيروس*
*♟️✨シ¦.اخرج*
*♟️✨シ¦.فك-البان*
*♟️✨シ¦.الجروبات*
*♟️✨シ¦.البوت فتح*
*♟️✨シ¦.البوت قفل*
*♟️✨シ¦.المحظورين*
*♟️✨シ¦.ملاحظاتي*
*♟️✨シ¦.ملاحظه*
*♟️✨シ¦.حذف-ملاحظه*
*♟️✨シ¦.حذف-ملاحظاتي*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.منشن*
*♟️✨シ¦.مخفي*
*♟️✨シ¦.الرابط*
*♟️✨シ¦.اعاده*
*♟️✨シ¦.ترقيه*
*♟️✨シ¦.تخفيض*
*♟️✨シ¦.اضافه*
*♟️✨シ¦.طرد*
*♟️✨シ¦.غادر*
*♟️✨シ¦.حذف*
*♟️✨シ¦.تدمير*
*♟️✨シ¦.ارقام*
*♟️✨シ¦.الترحيب*
*♟️✨シ¦.المغادره*
*♟️✨シ¦.جروب*
*♟️✨シ¦.استطلاع*
*♟️✨シ¦.تفعيل*
*♟️✨シ¦.تعطيل*
*♟️✨シ¦.تغيرالاسم*
*♟️✨シ¦.تغيرالوصف*
*♟️✨シ¦.تغيرالصوره*
*♟️✨シ¦.انذار*
*♟️✨シ¦.حذف-انذار*
*♟️✨シ¦.الانذارات*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.شغل*
*♟️✨シ¦.فيديو*
*♟️✨シ¦.صوتي*
*♟️✨シ¦.فيد*
*♟️✨シ¦.تطبيق*
*♟️✨シ¦.مود*
*♟️✨シ¦.ملف*
*♟️✨シ¦.بينت*
*♟️✨シ¦.جوجل*
*♟️✨シ¦.بحث*
*♟️✨シ¦.صوره*
*♟️✨シ¦.ويلبر*
*♟️✨シ¦.تليجرام*
*♟️✨シ¦.ميديافاير*
*♟️✨シ¦.طقم*
*♟️✨シ¦.اولاد*
*♟️✨シ¦.خلفيه*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.اكس*
*♟️✨シ¦.شخص*
*♟️✨シ¦.شبيهي*
*♟️✨シ¦.نرد*
*♟️✨シ¦.هل*
*♟️✨シ¦.سؤال*
*♟️✨シ¦.ه*
*♟️✨シ¦.كت*
*♟️✨シ¦.احزر*
*♟️✨シ¦.عكس*
*♟️✨シ¦.رابطي*
*♟️✨シ¦.رابطه*
*♟️✨シ¦.علم*
*♟️✨シ¦.تهكير*
*♟️✨シ¦.عض*
*♟️✨シ¦.اضرب*
*♟️✨シ¦.قبل*
*♟️✨シ¦.اقتل*
*♟️✨シ¦.ارقص*
*♟️✨シ¦.حب*
*♟️✨シ¦.كف*
*♟️✨シ¦.كسر*
*♟️✨シ¦.تنمر*
*♟️✨シ¦.ضم*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.ملصق*
*♟️✨シ¦.سرقه*
*♟️✨シ¦.دمج*
*♟️✨シ¦.لصوت*
*♟️✨シ¦.لصوره*
*♟️✨シ¦.اكتب*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*♟️˹ قـسـم الانـمي┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦.وايفو*
*♟️✨シ¦.نيكو*
*♟️✨シ¦.لولي*
*♟️✨シ¦.ناروتو*
*♟️✨シ¦.انمي*
*❆│· • • ━ ⊰♟️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰♟️⊱═⋄─⋄━⋄*
*♟️✨シ¦⤺┇.البنك*
*♟️✨シ¦.محفظتي*
*♟️✨シ¦.اموالي*
*♟️✨シ¦.سحب*
*♟️✨シ¦.ايداع*
*♟️✨シ¦.تحويل*
*♟️✨シ¦.اعطي*
*♟️✨シ¦.تصفير*
*♟️✨シ¦.راتبي*
*♟️✨シ¦.التوب*
*♟️✨シ¦.هجوم*
*♟️✨シ¦.رهان*
*♟️✨シ¦.حظ*
*♟️✨シ¦.ألتوب*
┛─━═║✠║◦¦♟️¦◦║✠║═━─┗



*~.¸¸ ❝ 𝐏𝐀𝐓𝐂𝐇𝐒𝐄𝐑𝐀 𝐵𝑂𝑇 ❝ ¸¸.~*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )                                                    
