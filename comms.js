const config = require('./config.json');
const Discord = require('discord.js');
const prefix = config.prefix;
const versions = config.versions;
        
		
// Команды //

    function test(robot, mess, args) {
        mess.channel.send("Тест!")
    }
	
	function stest(robot, mess, args) {
        args.slice(0).join(" ")

		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle(args[0])
		.setDescription(args.slice(1).join(" "))

		mess.channel.send(embed);
    }
	
	function help(robot, mess, args) {
        const embed = new Discord.MessageEmbed()
		.setColor(0x2299ee)
		.setTitle("Список команд")
		.setDescription("префикс команды `a!`\n\n`bite` - укусить\n`blush` - покраснеть\n`cry` - заплакать\n`d` - возврат случайного пользователя Discord\n`help` - список команд\n`hug` - обнять\n`kiss` - поцеловать\n`lick` - лизнуть\n`nom` - дать вкусняшку\n`pat` - погладить\n`poke` - тыкнуть\n`test` - тест\n`slap` - ударить")

		mess.channel.send(embed);
    }
	
	function pat(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-2.discordapp.net/external/J5f8rF4mT_uxf6Sfyc3Hs8IWE9IottoLkAcqtFuQBtk/https/cdn.weeb.sh/images/rkZbJAYKW.gif',
			'https://images-ext-2.discordapp.net/external/HzsTrMFk29JcFITmJ0kWGh6TPUzF_L9eQ-SfGt54Cdk/https/cdn.weeb.sh/images/S1ja11KD-.gif',
			'https://images-ext-2.discordapp.net/external/ab1ICw2oaiDaG8Y0DwlPClP7xG54Ie4kKcaFtn7Q8LU/https/cdn.weeb.sh/images/SktIxo20b.gif',
			'https://images-ext-1.discordapp.net/external/wR79npSG4g_PyfjIu-G6fcgNC8atFctLfa64UOq1z6U/https/cdn.weeb.sh/images/Sy6Gektw-.gif',
			'https://images-ext-2.discordapp.net/external/ipImC_vadFOZgbWuLvAY4zjChlgzFAXFVOuWIb3R1II/https/images-ext-2.discordapp.net/external/-Xxo91hc4A0A2-zjMZA1h7-FRWnEbIV9gp16K28ayQk/https/media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
			'https://images-ext-2.discordapp.net/external/OpnzTMkGlE6bSNxaxXeqspZkbn6up45N9OkHkW65OqE/https/cdn.weeb.sh/images/rJ1WlyKPZ.gif',
			'https://images-ext-2.discordapp.net/external/g-wa_0tWijFjWlRC1aKm8sUxEo1EjP98cqzvvkyywos/https/cdn.weeb.sh/images/rkSN7g91M.gif',
			'https://images-ext-2.discordapp.net/external/d034VmB2BJZrFh6a4DGj4vrwLU_p1AFwCgjOiCh_K-4/https/cdn.weeb.sh/images/Bk4Ry1KD-.gif',
			'https://images-ext-1.discordapp.net/external/PzOpIvj5jAgz6bcEq7jwtXPbKgmSV-dVKSvPc__CsCQ/https/cdn.weeb.sh/images/rkl1xJYDZ.gif',
			'https://images-ext-2.discordapp.net/external/dXB2drleqbWmmKS4zmiujZQUKVVpygidsw6cxN-S_wA/https/cdn.weeb.sh/images/rkBZkRttW.gif',
			'https://images-ext-1.discordapp.net/external/8tlbO-PtNvDizaijNJSJrzY1-lGprkAw_aO95H196dQ/https/cdn.weeb.sh/images/r1Y5L6NCZ.gif',
			'https://images-ext-2.discordapp.net/external/VQtB-a5MFiL7cV7ki3lv6XHrTlVf5QIyzrpPM3mtECQ/https/cdn.weeb.sh/images/ByOc1ktv-.gif',
			'https://images-ext-2.discordapp.net/external/q3k68K7g7n3pzOBR00MkNatDjllZj5UzgbR8OSskyug/https/cdn.weeb.sh/images/SJmW1RKtb.gif',
			'https://images-ext-1.discordapp.net/external/2j3p4vd6QDO0f1VOeQ615IFQNj8AHGlbb3ozNN7yg4g/https/cdn.weeb.sh/images/H1jnJktPb.gif',
			'https://images-ext-2.discordapp.net/external/J5f8rF4mT_uxf6Sfyc3Hs8IWE9IottoLkAcqtFuQBtk/https/cdn.weeb.sh/images/rkZbJAYKW.gif',
			'https://images-ext-2.discordapp.net/external/5ol3M2-FsEvm81oZXbS8rZdEdevG3qqDJ9faicEDrw8/https/cdn.weeb.sh/images/rJMskkFvb.gif',
			'https://images-ext-1.discordapp.net/external/yOicyNxjyB_y1Cf3hCgsePnL36oofd1qjsyFRjDWOzc/https/cdn.weeb.sh/images/SyFmqkFwW.gif',
			'https://images-ext-1.discordapp.net/external/5DdAOPlkQAb8OoK9B9vPN-gyhI4ksyleuWoqZ2_kt-I/https/cdn.weeb.sh/images/B1FqkJKPW.gif',
			'https://images-ext-1.discordapp.net/external/Z99QPlMgHigSrf62tiUGnzx3MrhsdlUc5m3-A1wh6v0/https/cdn.weeb.sh/images/HyxG31ktDb.gif',
			'https://images-ext-1.discordapp.net/external/JEAFCqiKcZsNiNPYNxp_hhd7VXoIJLhLcteH0y2-ZCo/https/cdn.weeb.sh/images/H1jgekFwZ.gif',
			'https://images-ext-2.discordapp.net/external/dj2bp-oBhx3HziPRIM3hcFgi27ZE_EweW1DTz55O2oU/https/cdn.weeb.sh/images/rkbblkYvb.gif',
			'https://images-ext-1.discordapp.net/external/WkadOKl57BXFPrssONkJSxn-k5HbCaOW7lZdawcxN60/https/cdn.weeb.sh/images/B1D9J1tvZ.gif',
			'https://images-ext-2.discordapp.net/external/ICpeJxR09b-lzz3tXPKdAjW25Jsc18zxdJ52-YlZfu0/https/cdn.weeb.sh/images/SkVNXac-G.gif',
			'https://images-ext-2.discordapp.net/external/NXRh6QVO-zliWMAQntwPjwYUF4ctE_aLipSLgZXaj7M/https/cdn.weeb.sh/images/rkTC896_f.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
        let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} погладил(а) по головке ${args.slice(1).join(" ")}`)
		.setImage(RandElement)

		mess.channel.send(embed);
    }
	
	function hug(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-2.discordapp.net/external/-H1bSRTc4f4C3rcH_AZ_QZmVEp20lUrx0_oIAcGvVOU/https/images-ext-2.discordapp.net/external/EyCJQeOAtkXAP5Ls_VuOZynz8utneURoWID6BWAzUS0/https/cdn.weeb.sh/images/HyNJIaVCb.gif',
			'https://images-ext-1.discordapp.net/external/3ttNVWPoS96bPld67jzLGaq4nezwu4BPJxQK2tCKYCw/https/images-ext-1.discordapp.net/external/5QUUGYYcVtEx8DXKEEqUKJDW2qMCbNKX75sKBvkeNeI/http/i.imgur.com/sW3RvRN.gif',
			'https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif?itemid=9375012',
			'https://media.tenor.com/images/f192f4d5171bef20fdb0e61c60ea7a23/tenor.gif',
			'https://media.tenor.com/images/a9730f44f28d959abb4c5b31edc77de8/tenor.gif',
			'https://media.tenor.com/images/15c39a7d6b03267941a87b24483ab696/tenor.gif',
			'https://media.tenor.com/images/2bb6bb01e688c05ddd02f871971b88ba/tenor.gif',
			'https://images-ext-1.discordapp.net/external/Hc1D_bdUkrWgOCjT5uASKXHgqk9niad_7lVZJWGsMjk/https/cdn.weeb.sh/images/rkV6r56Oz.gif',
			'https://images-ext-2.discordapp.net/external/YUlo10F3-csv9ue395SadaDLAjCF2YImIT3bM5jwLH8/https/cdn.weeb.sh/images/ry6o__7D-.gif',
			'https://images-ext-2.discordapp.net/external/8Xj6oc22thax8JTjwdlISdkEjTNTIMG53CZjyp6kJO0/https/cdn.weeb.sh/images/BkuUhO1OW.gif',
			'https://images-ext-1.discordapp.net/external/Ki4ytGZlwiyMkKqBrL6Jvxj01A6_TQ5-wbIB-MmqWp4/https/cdn.weeb.sh/images/Hk3ox0tYW.gif',
			'https://images-ext-2.discordapp.net/external/0Qqr3MhBsC1p5peV7LwrRY0QpuQtssC88kEpUTlgtsE/https/cdn.weeb.sh/images/r1bAksn0W.gif',
			'https://images-ext-1.discordapp.net/external/04SRmOKGYDqkYRdLcWtt5b6CLCiL0ml8nulzoIGkTjU/https/cdn.weeb.sh/images/Hy0KO_7DZ.gif',
			'https://images-ext-2.discordapp.net/external/uyU9KgQuweYRgVw6V0krCHQEji_jqTLWmc3xVMKJvU8/https/cdn.weeb.sh/images/rJ_slRYFZ.gif',
			'https://images-ext-1.discordapp.net/external/3VcBYcpBYmXk4hkCSv198n_e_OxgZHnORCKytR0Q53w/https/cdn.weeb.sh/images/S1gUsu_Qw-.gif',
			'https://images-ext-1.discordapp.net/external/K6PI2Xh0O1dtAHrxtn0migKbiP7oE-DsNRWTwRGtDW8/https/cdn.weeb.sh/images/rkIK_u7Pb.gif',
			'https://images-ext-1.discordapp.net/external/HfUcuu3QvK8oEoY0etyGi10DGyKB2TSXlMXu2xvCt80/https/cdn.weeb.sh/images/HyllFdmwZ.gif',
			'https://images-ext-1.discordapp.net/external/qhpxVc9ymQBjgx9sAcTUWjN4YEAy1ab80Z5KRgjm5wY/https/cdn.weeb.sh/images/BysjuO7D-.gif',
			'https://images-ext-2.discordapp.net/external/mJObJ1HFYFVk4nvLL2vZumkjYw5J89Bp-8jV9OSqnnY/https/cdn.weeb.sh/images/BJx2l0ttW.gif',
			'https://images-ext-2.discordapp.net/external/YSH6MzKY5bdTrVcEkStQ_CdpiPn5uZn4Nmt2eWF1J6g/https/cdn.weeb.sh/images/HkRwnuyuW.gif',
			'https://images-ext-1.discordapp.net/external/pzfPk7X0r5JmkBI1OFfVfOQtS6_nb-_0LNzrtnOgETo/https/cdn.weeb.sh/images/HJ7lY_QwW.gif',
			'https://images-ext-1.discordapp.net/external/xUyeHjViQkLTS-QPI894Pgi3sMvA70O54QSBr-LX8P0/https/cdn.weeb.sh/images/Hyv6uOQPZ.gif',
			'https://images-ext-2.discordapp.net/external/iYOTMwzM8SAFzhx4JoSFGRpSdSN75hF3454lyxc-wOw/https/cdn.weeb.sh/images/r1kC_dQPW.gif',
			'https://images-ext-1.discordapp.net/external/SYYo1DRH4qQ7WXtcuvYvS1XA3ySGUeLiQDxB8daHYhg/https/cdn.weeb.sh/images/rJCigAYFZ.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} обнял(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function blush(robot, mess, args) {
		var gif = new Array(
            'https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif',
			'https://media.tenor.com/images/4b0f5742525e44fad07d39590f61fcff/tenor.gif',
			'https://media.tenor.com/images/46f98c39ccae3066ac49c92468bc0e8e/tenor.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} покраснел(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function poke(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-2.discordapp.net/external/8DEhd_1H2FtjhdMZ2wth2XFaFnbfhHAYpboMfzlnFik/https/images-ext-1.discordapp.net/external/b66LGZQXF_PpYI7Qnr7Nzmczt2g8ZyE5Zd8j7CqWRLg/https/cdn.weeb.sh/images/SyQzRaFFb.gif',
			'https://images-ext-2.discordapp.net/external/hE-wfaqESpw6bQWw12o9EqYgkg0pD7dDPMPrlNHxHM4/https/media.discordapp.net/attachments/573577159063502848/579922563640328202/tumblr_on0ks5LR3P1ridyfoo1_500.gif',
			'https://images-ext-1.discordapp.net/external/Mr7kWzINuHR_2Z2iQM8IOvTmPlXiLQoStKHcypFHMHs/https/images-ext-2.discordapp.net/external/MeUblTOP-EDgZEd9Ns5f_e0bpmo_LsNsiZQSAKy_lzs/https/cdn.weeb.sh/images/rJ0hlsnR-.gif',
			'https://images-ext-1.discordapp.net/external/t7ZfLbgEzKnnk2dEN0IwkN8JCqMUJ53nt9hXrrbkD-I/https/cdn.weeb.sh/images/SyJzRTKFW.gif',
			'https://images-ext-1.discordapp.net/external/gDbA_lE4hk04MugGK0NU94717w0pJKkhTG2ue2UxHwM/https/cdn.weeb.sh/images/H1fMRpYtb.gif',
			'https://images-ext-2.discordapp.net/external/7QPpjbUK-ZjlIgfCpAg17jcXXMn77bUgdqF9oBXxBhE/https/cdn.weeb.sh/images/BJhIekKwb.gif',
			'https://images-ext-2.discordapp.net/external/VycnTH2wVywz39s1dRPRMRlOQGCOnsk-oRNYrapxWxw/https/cdn.weeb.sh/images/H1x2HxyYD-.gif',
			'https://images-ext-2.discordapp.net/external/8-mP_BtL8nTF12b-tSgu95wmZeLnyl31q6wxK_yjwoY/https/cdn.weeb.sh/images/SydLxJFwW.gif',
			'https://images-ext-1.discordapp.net/external/HGoRaNvnM3neBl9aCqPj-NvbVN724ftdR_CSAfCnfjU/https/cdn.weeb.sh/images/r1v6xoh0Z.gif',
			'https://images-ext-1.discordapp.net/external/YNM40_Gj-0vsM2yiFxGovBfeusH5mBqu0hmiBmu_yNY/https/cdn.weeb.sh/images/r1ALxJKwW.gif',
			'https://images-ext-2.discordapp.net/external/g5NKbvE4AFkwNmRajPkzZWP5acTByYYJStaypCOpObE/https/cdn.weeb.sh/images/rkeaUeJKD-.gif',
			'https://images-ext-1.discordapp.net/external/d20w8SuCYPt4XhErl972iQTEdFn8cm_aybp-skqkBqA/https/cdn.weeb.sh/images/rktSlkKvb.gif',
			'https://images-ext-2.discordapp.net/external/Mx6vq6gQZuBGN5RmVrQdpD59XrmHRU3x0E4srDI3Alg/https/cdn.weeb.sh/images/B14SJlTQG.gif',
			'https://images-ext-1.discordapp.net/external/LKyMLMwHx-JJ1c5xv5uZpnGdHox9sxszaYdz5TZk7n8/https/cdn.weeb.sh/images/B1oSgytwW.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} тыкнул(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function slap(robot, mess, args) {
		var gif = new Array(
			'https://images-ext-1.discordapp.net/external/k6Pv9KnNt_czqHIOX6qM3TFBxgjZgpjt0yzXuGvQh_M/https/images-ext-2.discordapp.net/external/qA7fZdO8BpoYMxczVEhoaCjmQeccYMHYsA0rckBGLGE/https/cdn.weeb.sh/images/H1n57yYP-.gif',
			'https://media.tenor.com/images/773a233da0deb1d764cd206b5a415c0d/tenor.gif',
			'https://images-ext-1.discordapp.net/external/dCMWFNJ6j6J1yp6QBjyXr0-91Vp-KhzQA_9YMbwRV2g/https/cdn.weeb.sh/images/HJKiX1tPW.gif',
			'https://images-ext-1.discordapp.net/external/RkuVbGqqfdQnvvz5G6kccEkN3qQkWStkPDU8ghc1GL8/https/cdn.weeb.sh/images/H16aQJFvb.gif',
			'https://images-ext-2.discordapp.net/external/G35EQR9MLr828iyJ6my03DBm8IBht1RfGAF1dGzmT3k/https/cdn.weeb.sh/images/Sk9mfCtY-.gif',
			'https://images-ext-2.discordapp.net/external/sZZBSC9KfJU_--hWJ5h2G6aqItuji07Ncjfq8QquJ-A/https/cdn.weeb.sh/images/BkzyEktv-.gif',
			'https://images-ext-2.discordapp.net/external/WkmXB4tLecPn84ExvOOo3hEj79aYajdKC91pe1wzc38/https/cdn.weeb.sh/images/SkKn-xc1f.gif',
			'https://images-ext-1.discordapp.net/external/hHSiItwzffiKIJrZrKORpzmxoi0R6wzDRx59f6tx_Y4/https/cdn.weeb.sh/images/HkskD56OG.gif',
			'https://images-ext-1.discordapp.net/external/Z9eMA0ql_7NQVF1zkEptGDPiEMfqvfERknL3NxvKcX0/https/cdn.weeb.sh/images/HkK2mkYPZ.gif',
			'https://images-ext-1.discordapp.net/external/Mu4Zc8DliG7dUSZfBhqe5uly8SeH9uGCgbQdLG3-3SE/https/cdn.weeb.sh/images/Byjqm1tDW.gif',
			'https://images-ext-1.discordapp.net/external/C9aiLHGnL0j-e1JtYhi2jYtkxnnw3tS7jELA9XyrDDY/https/cdn.weeb.sh/images/SJzT7JKP-.gif',
			'https://images-ext-1.discordapp.net/external/0aqsoVra7xRRbspvHkog9G0pNxbfw-P5riXBzXiqqNQ/https/cdn.weeb.sh/images/ryv3myFDZ.gif',
			'https://images-ext-1.discordapp.net/external/N62oAmXji3QUs5pgtMeXY-EAJxyqrNebCbq_pTrmBME/https/cdn.weeb.sh/images/SJ-CQytvW.gif',
			'https://images-ext-2.discordapp.net/external/Mjh-SesBluNQ_SohJpk_30ac6GgDvaQ4Mx3-kbBH1vs/https/cdn.weeb.sh/images/SJdXoVguf.gif',
			'https://images-ext-2.discordapp.net/external/VT5Wb1dtOIrEa9CRpVB2hmYxFBBLnxzFWMtDJqwpFF4/https/cdn.weeb.sh/images/rJgTQ1tvb.gif',
			'https://images-ext-1.discordapp.net/external/PTu9TahlTEaW9ppqMriRgas0bC6zVSIrkIteZy9X13w/https/cdn.weeb.sh/images/HkJ6-e91z.gif',
			'https://images-ext-1.discordapp.net/external/aI0LeEg5EG4qT_j3LfraDNdGwyFrAVoAqPUp6zx3ErU/https/cdn.weeb.sh/images/SJlkNkFwb.gif',
			'https://images-ext-1.discordapp.net/external/d3LDqjdDMIcU7nktCC-0ZlKg3nLRWvtPzEdzrnlTviE/https/cdn.weeb.sh/images/Sk0RmyYvb.gif',
			'https://images-ext-2.discordapp.net/external/DBXvKKQzJKqBB0iqk1HmuGLDb4HKgNi0qVY2e30j0uM/https/cdn.weeb.sh/images/SkZTQkKPZ.gif',
			'https://images-ext-1.discordapp.net/external/euOVT3GSTu_N6qfHJzyDzKXXYtB9A_KPQet5HhvAEiY/https/cdn.weeb.sh/images/rkpAXa5bG.gif',
			'https://images-ext-1.discordapp.net/external/9LgX1ZjxdB-oS_GUMgizdh31kHwyIgCvnGgVFQZ4-Zc/https/cdn.weeb.sh/images/BJLCX1Kw-.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} ударил(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function lick(robot, mess, args) {
		var gif = new Array(
			'https://images-ext-2.discordapp.net/external/Txb9tlXopCZCNBQcPLjRn6Zg2o6PinfPonfvqYNfpws/https/images-ext-2.discordapp.net/external/YveW8Lanx1kD9154i-y3ZalegChtroIEACzKTRsoNnc/https/cdn.weeb.sh/images/H13HS7S6-.gif',
			'https://media.tenor.com/images/af01ffd9c980f1f6256110ff51c1210d/tenor.gif',
			'https://images-ext-2.discordapp.net/external/kfgdvK8A0dborfyqQbX3tNsZ1ON5_1vTc3t_eEs7g3g/https/cdn.weeb.sh/images/HkEqiExdf.gif',
			'https://images-ext-2.discordapp.net/external/thImffzNHXbD4uB3R-av9x0cvsdmumPWfN8IW7huw1c/https/cdn.weeb.sh/images/Bkagl0uvb.gif',
			'https://images-ext-1.discordapp.net/external/QAh4YL0JFxeg7wWxw4G3cCucyPRj2fHB3w3zmONGtjg/https/cdn.weeb.sh/images/Bkxge0uPW.gif',
			'https://images-ext-2.discordapp.net/external/9xiregisvDewxtEC9iCJPqJWNlrFEn3kcj3YA-ev_Po/https/cdn.weeb.sh/images/H1EJxR_vZ.gif',
			'https://images-ext-2.discordapp.net/external/EVS-yozpRCwqM9JrkkgoTry1IqkDyTJVNjF7ZhIik5U/https/cdn.weeb.sh/images/S1Ill0_vW.gif',
			'https://images-ext-2.discordapp.net/external/1AoFzXaNiKcnBc4OrS3R7jsf9MJEDcikx38nUkbFQW8/https/cdn.weeb.sh/images/HJRRyAuP-.gif',
			'https://images-ext-2.discordapp.net/external/7Z44TxcqvrQ0MFBN58xgLORs2IFpOlm-SIMwrF0JP2g/https/cdn.weeb.sh/images/rykRHmB6W.gif',
			'https://images-ext-1.discordapp.net/external/FkCpjXWxRoOX04p318pJb2KDyTcgzSk7DsAufy8m9pc/https/cdn.weeb.sh/images/BkvTBQHaZ.gif',
			'https://images-ext-2.discordapp.net/external/p9PPETtAMlABYLR7mC1aJZdjjvd0JJ3hx3Wbta1oALY/https/cdn.weeb.sh/images/rkBbBQS6W.gif',
			'https://images-ext-1.discordapp.net/external/_QaVvq5ZM5eJ2WvVsd7y24dP3UGU3fHfOdh2YMt6DmI/https/cdn.weeb.sh/images/Hkknfs2Ab.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} лизнул(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function kiss(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-1.discordapp.net/external/Y0-dNO3ABVfOO7FbMaY4jpCOTZ-nMT297xH7P_o7iUk/https/images-ext-2.discordapp.net/external/v-H-sYUOi94yY2MzrPIzEklqPFL_VkMRN-tOlSvdICU/https/i.imgur.com/eKcWCgS.gif',
			'https://images-ext-2.discordapp.net/external/nPo-8Bxr7LCLTa1_xsLDfLHKUz3w6gniqW5FAA_tGHg/https/images-ext-1.discordapp.net/external/3fQ5-DHwR3Gd3i9d_iy-5RNfrrIMbP9abTZbbu4J52U/https/i.imgur.com/II1bakc.gif',
			'https://images-ext-1.discordapp.net/external/WcZJdjxfHGT2phK10HiF0RypvxhY34AH5z8KXvO72rY/https/images-ext-1.discordapp.net/external/P-LXvlyKOOpiSSDDe0dz5_2oWi_YSG_UeOE1t21k8sE/https/i.imgur.com/nCwCS55.gif',
			'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
			'https://images-ext-1.discordapp.net/external/ux_Sl4Y3XLFl6UxHNsBeDs6FrjC5PLcz05t_evDfFgw/https/images-ext-2.discordapp.net/external/oYt423OZJ5ccvviekeAt2MzCq7Q0w0SvCU-zMCkHYvI/https/i.imgur.com/FozOXkB.gif',
			'https://images-ext-2.discordapp.net/external/ksqpKGzfdfaDuieHCuV0zR4_UbKjr7pMTw3QVBvSFKU/https/cdn.weeb.sh/images/rJ6PWohA-.gif',
			'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
			'https://media.tenor.com/images/1f9175e76488ebf226de305279151752/tenor.gif',
			'https://media.tenor.com/images/cebf4dc3536801abbbf4be8cc9d441f1/tenor.gif',
			'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
			'https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif',
			'https://media.tenor.com/images/45246226e54748be5175ab15206de1c5/tenor.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} поцеловал(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function cry(robot, mess, args) {
		var gif = new Array(
            'https://media.discordapp.net/attachments/573577159063502848/579922653356228618/3251723044_1_5_ujp15gLs.gif',
			'https://media1.tenor.com/images/98466bf4ae57b70548f19863ca7ea2b4/tenor.gif?itemid=14682297',
			'https://media.tenor.com/images/d7286a667f4c7f5e3af2daf2ac3d9948/tenor.gif',
			'https://media1.tenor.com/images/ffdf5f70c546c26bd58a13b69a79dba6/tenor.gif?itemid=8918260',
			'https://media.tenor.com/images/91fe5528f8ecd420f49f541196f9318c/tenor.gif',
			'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
			'https://media.giphy.com/media/2rtQMJvhzOnRe/giphy.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} расплакался(ась) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function nom(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-1.discordapp.net/external/Gm6ifJNFEBiNaQZSaWbjmf7X4xj4GgS_lhy_NeVjWZs/https/images-ext-1.discordapp.net/external/n5hDLhICfTQEnbaYooZ-tSjWpnjfbGOZWa-b28F34bw/https/cdn.weeb.sh/images/SJPgk1Ywb.gif',
			'https://media.tenor.com/images/8729229b46bf9e2756692cfeff94ae64/tenor.gif',
			'https://media.giphy.com/media/qpZ4jZN2cMkgg/giphy.gif',
			'https://media.giphy.com/media/X6RAPBkClHs7C/giphy.gif',
			'https://images-ext-2.discordapp.net/external/qEPt_OhpiLVDmGA_m3wvdQlctowDVqJWLsEc3lq15Qk/https/cdn.weeb.sh/images/HJ_RAAuvb.gif',
			'https://images-ext-2.discordapp.net/external/XVbh1D2WS8gB7gagmDXg-RjvJWxdo0ehH_AWD9Eexes/https/cdn.weeb.sh/images/Hy_fykFvZ.gif',
			'https://images-ext-1.discordapp.net/external/zCRksb9pRGBcTtiDYKHWZXgg7psh3woO8ACtR3mEO8Y/https/cdn.weeb.sh/images/ryDX1JKwW.gif',
			'https://images-ext-1.discordapp.net/external/xe3gekfL_0UoM2X1JOAvRtnZJvFY2rS9TYxad0gSjNI/https/cdn.weeb.sh/images/r1DryJtPb.gif',
			'https://images-ext-2.discordapp.net/external/xU1b5v6N7-b0oyXiU_4fdI7sc8rbEv1cIcsCyMDnkMQ/https/cdn.weeb.sh/images/BJSf1JFDZ.gif',
			'https://images-ext-1.discordapp.net/external/g8hz_OtPgn1LqmHgCklXO8BkuLC8P3z4UTk5jK7RyxM/https/cdn.weeb.sh/images/rynfK0DTW.gif',
			'https://images-ext-1.discordapp.net/external/QC0LCFd0EqAWqVpy4AQ5XRoDUDaLd6bnKbbODV3G4uA/https/cdn.weeb.sh/images/rk7f1yFDW.gif',
			'https://images-ext-2.discordapp.net/external/o_0y9KIL_oKu3bJHEoFQ6ZUk7YBgl88z_y_-nsGvkaU/https/cdn.weeb.sh/images/HyXleWRSz.gif',
			'https://images-ext-1.discordapp.net/external/e4dRTidLYjcr89QdQLbY8FxzXzPgvSMbbuXRL9cNN3g/https/cdn.weeb.sh/images/HJtZJJYvb.gif',
			'https://images-ext-2.discordapp.net/external/VysII0UmzWLafJS2AEGwWP8JRYWiJQ95CH2Tgzy-YxM/https/cdn.weeb.sh/images/SJu1y1FPZ.gif',
			'https://images-ext-2.discordapp.net/external/wNAqikh4fFj0ciHVJhvgxACwZakWRL0otNtyobpzfQI/https/cdn.weeb.sh/images/ryQ0AR_D-.gif',
			'https://images-ext-2.discordapp.net/external/gzaLCdxCAA-DhHeD4aIap33vOm9hpTh-ZeK0jvyKAd8/https/cdn.weeb.sh/images/rJZikZCBM.gif',
			'https://images-ext-1.discordapp.net/external/tjR2oxMfCN2WhPCnfPd1-TAxRD_rL98fgybRenpl04c/https/cdn.weeb.sh/images/HyHky1tDW.gif',
			'https://images-ext-1.discordapp.net/external/WDLBiM3EoAiVlUUDuJDBorV8d6OXQJeD4yMKjLuTDi0/https/cdn.weeb.sh/images/HySfF6VRW.gif',
			'https://images-ext-2.discordapp.net/external/kA49obSva1OgsHjPlEy_3yXssyDGQnUSlA4HEXpqGjU/https/cdn.weeb.sh/images/ry_bykYwW.gif',
			'https://images-ext-2.discordapp.net/external/e6NM-a-Rbe-vOgdAHSuXGdnASnIkoJWeGHb42kp7cb4/https/cdn.weeb.sh/images/B1aW1Jtwb.gif',
			'https://images-ext-1.discordapp.net/external/1Ycp-QU6j8z172qWkIoeFtVenwnESM_zFsW07VWFFKQ/https/cdn.weeb.sh/images/S12ACAdPZ.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} дал(а) вкусняшку ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function bite(robot, mess, args) {
		var gif = new Array(
            'https://images-ext-1.discordapp.net/external/iCpPs71Mrh3il0YLuuRfPNfyTrSfkFSjLg1P5CTL-8A/https/images-ext-2.discordapp.net/external/r3rrykORixusMeGtsQ0ZpNHDwNxa07qv9XvssjxzM3o/https/media.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif',
			'https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627',
			'https://media.tenor.com/images/777029607cf365f58e8b8ac57d548f19/tenor.gif',
			'https://media.tenor.com/images/3dde5b7f65a729d96239d6a6bc0ab08e/tenor.gif',
			'https://images-ext-2.discordapp.net/external/-D9Zv9tg8wIjh3cw66UfcQ1r_MaRamHojSelydPppLw/https/cdn.weeb.sh/images/S1o6egmjZ.gif',
			'https://images-ext-2.discordapp.net/external/aA2jjOja_c2JNojMWwikaRjGvbMhPXykDFJ5VaZKcao/https/cdn.weeb.sh/images/H1_Jbemjb.gif',
			'https://images-ext-1.discordapp.net/external/JoRx_p31x6jJFEifeUUge_zutUUtKeMU980Bw71Akbs/https/cdn.weeb.sh/images/BJXRmfr6-.gif',
			'https://images-ext-1.discordapp.net/external/cI3IB_rF-w6s9iilUoQmbQaYy95vObDuEx0exjET9tQ/https/cdn.weeb.sh/images/H1gYelQjZ.gif',
			'https://images-ext-2.discordapp.net/external/BtI7xu58umnPBw9Uw75kIEG10dfKIttZMFJaUfhNMzM/https/cdn.weeb.sh/images/rJAlbgXsb.gif',
			'https://images-ext-1.discordapp.net/external/5TQYqKzUUVY3FS_xVr0tcPthDqDVCb1_bkBynAXFv98/https/cdn.weeb.sh/images/ByWuR1q1M.gif',
			'https://images-ext-2.discordapp.net/external/ODm5LUY_vcfSGg5jxG8F-zGDVt1k0NzI2gB0AyTTrpY/https/cdn.weeb.sh/images/Hk1sxlQjZ.gif'
        );
		var RandElement = gif[Math.floor(Math.random()*(gif.length))]
		let embed = new Discord.MessageEmbed()
		.setColor(0xf1d810)
		.setTitle("")
		.setDescription(`${mess.author} укусил(а) ${args.slice(1).join(" ")}`)
		.setImage(RandElement)
		
		mess.channel.send(embed);
	}
	
	function d(robot, mess, args) {
		var discordnames = new Array(
            'Руби','Магнус','Виона','Саймон','Макс','Украш','Юнтер','Владлен','Лео','Рейко','Интерактор','Дошик','Акидори','Спайд','Мутя','Муся','Луни','Ярик','ЛеаЧан','Найтли','Лодертечес','Ангелина','Шодив','Флойд','Суприо','Илвай','Вован','Антарес','JuniperBot','MEE6','UnbelievaBoat','Маширо','Рест','Groovy','Rythm','KawaiiBot','Тохочел', 'Кокосиг'
        );
        var RandElement = discordnames[Math.floor(Math.random()*(discordnames.length))];
        mess.channel.send(RandElement)
	}

 // Список комманд //

var comms_list = [
	{name: "bite", out: bite, about: "Кусать"},
	{name: "blush", out: blush, about: "Покраснеть"},
	{name: "cry", out: cry, about: "Заплакать"},
	{name: "d", out: d, about: "Возврат случайного пользователя Discord"},
	{name: "help", out: help, about: "Помощь"},
	{name: "hug", out: hug, about: "Обнять"},
	{name: "kiss", out: kiss, about: "Поцеловать"},
	{name: "lick", out: lick, about: "Лизнуть"},
	{name: "nom", out: nom, about: "Вкусняшка"},
	{name: "pat", out: pat, about: "Погладить"},
	{name: "poke", out: poke, about: "Тыкнуть"},
	{name: "test", out: test, about: "Тестовая команда"},
	{name: "slap", out: slap, about: "Ударить"},
	{name: "stest", out: stest, about: "Секретный тест"},
]




module.exports.comms = comms_list;