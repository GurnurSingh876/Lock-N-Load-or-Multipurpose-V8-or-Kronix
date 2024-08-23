const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
    name: "serverinfo",
    aliases: ['si'],
    run: async (client, message, args) => {

        let serverOwner = await message.guild.fetchOwner().then(x => x.user).catch(() => {});

        //message.guild.owner = await message.guild.fetchOwner().then(x => x.user).catch(() => {});

        let mfa = "";
        if(message.guild.mfaLevel === `ELEVATED`) mfa = `<:tick:1132996565049552947>`;
        else { mfa = `<:cross:1132996452218585209>`}

        let bar = '';
        if(message.guild.premiumProgressBarEnabled === `true`) bar = `<:tick:1132996565049552947>`;
        else{bar = `<:cross:1132996452218585209>`;}

        let veri = '';
        if(message.guild.verificationLevel === 'NONE') { veri = 'None' }
        if(message.guild.verificationLevel === 'LOW') { veri = 'Low' }
        if(message.guild.verificationLevel === 'MEDIUM') { veri = 'Medium' }
        if(message.guild.verificationLevel === 'HIGH') { veri = 'High' }
        if(message.guild.verificationLevel === 'VERY_HIGH') { veri = 'Very High' }

        let upload = '';

        let boostlvl = '';
        if(message.guild.premiumTier === 'NONE') { boostlvl = `Level: 0 [<:boost:1147568228634210404> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_1') { boostlvl = `Level: 1 [<:boost:1147568228634210404> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_2') { boostlvl = `Level: 2 [<:boost:1147568228634210404> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `50.00 MB`; }
        if(message.guild.premiumTier === 'TIER_3') { boostlvl = `Level: 3 [<:boost:1147568228634210404> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `100.00 MB`; }

        let msg = '';
        if(message.guild.defaultMessageNotifications === `ONLY_MENTIONS`) { msg = `Only @mentions` }
        else { msg = `All Messages` }

        let mfilter = '';
        if(message.guild.explicitContentFilter === 'DISABLED') { mfilter = 'None' }
        if(message.guild.explicitContentFilter === `MEMBERS_WITHOUT_ROLES`) { mfilter = 'Members Without Roles' }
        if(message.guild.explicitContentFilter === `ALL_MEMBERS`) { mfilter = 'All Members' }

        let nsfw = '';
        if(message.guild.nsfwLevel === 'DEFAULT') { nsfw = 'Default' }
        if(message.guild.nsfwLevel === 'EXPLICIT') { nsfw = 'Explicit' }
        if(message.guild.nsfwLevel === 'SAFE') { nsfw = 'Safe' }
        if(message.guild.nsfwLevel === 'AGE_RESTRICTED') { nsfw = 'Age Restricted' }

        let features = '';
        if(message.guild.features.includes('ANIMATED_BANNER')) features += `\n <:tick:1132996565049552947> : Antimated Banner`;
        if(message.guild.features.includes('ANTIMATED_ICON')) features += `\n<:tick:1132996565049552947> : Animated Icon`;
        if(message.guild.features.includes('APPLICATION_COMMAND_PERMISSIONS_V2')) features += `\n<:tick:1132996565049552947> : Application Commands Permissions V2`;
        if(message.guild.features.includes('BANNER')) features += `\n<:tick:1132996565049552947> : Banner`;
        if(message.guild.features.includes('AUTO_MODERATION')) features += `\n<:tick:1132996565049552947>: Auto Moderation`;
        if(message.guild.features.includes('COMMUNITY')) features += `\n<:tick:1132996565049552947> : Community`;
        if(message.guild.features.includes('DEVELOPER_SUPPORT_SERVER')) features += `\n<:tick:1132996565049552947> : Developer Support Server`;
        if(message.guild.features.includes('DISCOVERABLE')) features += `\n<:tick:1132996565049552947> : Discoverable`;
        if(message.guild.features.includes('FEATURABLE')) features += `\n<:tick:1132996565049552947> : Featurable`;
        if(message.guild.features.includes('INVITES_DISABLED')) features += `\n<:tick:1132996565049552947> : Invites Disabled`;
        if(message.guild.features.includes('INVITE_SPLASH')) features += `\n<:tick:1132996565049552947> : Invite Splash`;
        if(message.guild.features.includes('MEMBER_VERIFICATION_GATE_ENABLED')) features += `\n<:tick:1132996565049552947> : Member Verification Gate Enabled`;
        if(message.guild.features.includes('MONETIZATION_ENABLED')) features += `\n<:tick:1132996565049552947> : Monetization Enabled`;
        if(message.guild.features.includes('MORE_STCIKERS')) features += `\n<:tick:1132996565049552947> : More Stickers`;
        if(message.guild.features.includes('NEWS')) features += `\n<:tick:1132996565049552947> : News`;
        if(message.guild.features.includes('PARTNERED')) features += `\n<:tick:1132996565049552947> : Partnered`;
        if(message.guild.features.includes('PREVIEW_ENABLED')) features += `\n<:tick:1132996565049552947> : Preview Enabled`;
        if(message.guild.features.includes('ROLE_ICONS')) features += `\n<:tick:1132996565049552947> : Role Icons`;
        if(message.guild.features.includes('TICKETED_EVENTS_ENABLED')) features += `\n<:tick:1132996565049552947> : Ticketed Events Enabled`;
        if(message.guild.features.includes('VANITY_URL')) features += `\n<:tick:1132996565049552947> : Vanity URL`;
        if(message.guild.features.includes('VERIFIED')) features += `\n<:tick:1132996565049552947> : Verified`;
        if(message.guild.features.includes('VIP_REGIONS')) features += `\n<:tick:1132996565049552947> : Vip Regions`;
        if(message.guild.features.includes('WELCOME_SCREEN_ENABLED')) features += `\n<:tick:1132996565049552947> : Welcome Screen Enabled`;
        if(features === '') features += `\nNo features`;

        let lol = message.guild.roles.cache.sort((x,y) => y.position - x.position).map(r => r.toString()).slice(0,-1);

        let sroles;

        if(lol.length < 24)
        {
            sroles = lol.join(', ');

            if(lol.length < 1) sroles = "None";
        } else { sroles = `\`Too many roles too show...\`` }
        if(sroles.length > 1024) sroles = `${lol.slice(4).join(', ')} more..`
        

        let time = Math.round(message.guild.createdTimestamp/1000)

        let emb = new MessageEmbed().setColor(`#2f3136`).setTitle(`${message.guild.name}'s Information`).setTimestamp().setThumbnail(message.guild.iconURL({dynamic : true})).addFields(
            [
                {
                    name : `<a:arrow_right:1133392521297399960> __About Server__`,
                    value : `**Name** : ${message.guild.name} \n **Id** : ${message.guild.id} \n **Owner** <:Owner:1148170423545102367> : ${serverOwner.username} [${serverOwner}] \n **Members** : ${message.guild.memberCount} \n  **Created** : <t:${time}:R> \n **Banned** : ${message.guild.bans.cache.size}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Extras__`,
                    value : `**Verification Level** : ${veri} \n **Upload Limit** : ${upload} \n **Inactive Channel** : ${message.guild.afkChannel ? message.guild.afkChannel : 'None'} \n **Inactive Timeout** : ${message.guild.afkChannel ? message.guild.afkTimeout : 'None'} \n **System Messages Channel** : ${message.guild.systemChannel ? message.guild.systemChannel : 'None'} \n **Default Notifications** : ${msg} \n **Explicit Media Content Filter** : ${mfilter} \n **NSFW Level** : ${nsfw} \n **2FA Requirement** : ${mfa} \n **Boost Bar Enabled** : ${bar}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Description__`,
                    value : `${message.guild.description ? message.guild.description : 'No Description set yet.'}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Features__`,
                    value : `${features}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Channels__`,
                    value : `**Total** : ${message.guild.channels.cache.size} \n **Channels** : <:ChannelText:1189996096299225178> ${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) | <:VoiceChannel_SE:1189996202004054126> ${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) \n **Rules Channel** : ${message.guild.rulesChannel ? message.guild.rulesChannel : 'None'}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Emoji Info__`,
                    value : `Regular : ${message.guild.emojis.cache.filter(x => !x.animated).size} \n Animated : ${message.guild.emojis.cache.filter(x => x.animated).size} \n Total : ${message.guild.emojis.cache.size}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Boost Stats__`,
                    value : `${boostlvl}`
                },
                {
                    name : `<a:arrow_right:1133392521297399960> __Server Roles__ [${message.guild.roles.cache.size}]`,
                    value : `${sroles}`
                }
            ]
        ).setFooter({text : `Requested By : ${message.author.username}` , iconURL : message.author.displayAvatarURL({dynamic : true})})
        if(message.guild.banner) emb.setImage(message.guild.bannerURL({dynamic : true , size : 1024 }));
        
        return message.channel.send({embeds : [emb]});
    }
}
