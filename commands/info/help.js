const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} = require("discord.js");
const Settings = require("../../settings.js");
const { ownerIDS } = require("../../owner.json");
const emoji = require("../../emoji.js");
const owner = Settings.bot.credits.developerId;

module.exports = {
  name: "help",
  aliases: ["h"],
  run: async function (client, message, args) {
    const prefix =
      (await client.db8.get(`${message.guild.id}_prefix`)) ||
      Settings.bot.info.prefix;
    const arypton = await client.users.fetch(owner);
    let commands;
    const data = await client.db11.get(`${message.guild.id}_eo.extraownerlist`);
    const data1 = await client.db11.get(
      `${message.guild.id}_ea.extraadminlist`,
    );
    const premium = await client.db12.get(`${message.guild.id}_premium`);

    const menuOptions = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("helpOption")
        .setPlaceholder("Choose wisely, shape your destiny.")
        .addOptions([
          {
            label: "Home",
            value: "h1",
            emoji: "1156273221201567814",
            description: "See Home Page",
          },
          {
            label: "Antinuke",
            value: "h2",
            emoji: "1209181835784101898",
            description: "See the antinuke Commands",
          },
          {
            label: "Automod",
            value: "h3",
            emoji: "1209181830608330854",
            description: "See the Automod Commands",
          },
          {
            label: "Moderation",
            value: "h4",
            emoji: "1209182855071141948",
            description: "See the Moderation Commands",
          },
          {
            label: "Welcome",
            value: "h5",
            emoji: "1209185151649849355",
            description: "See the Welcome Commands",
          },
          {
            label: "Server",
            value: "h6",
            emoji: "1209183462402039808",
            description: "See the Server Commands",
          },
          {
            label: "Voice Role",
            value: "h7",
            emoji: "1209185393925169222",
            description: "See the Voice Role Commands",
          },
          {
            label: "Custom Roles",
            value: "h8",
            emoji: "1209184436910952499",
            description: "See the Custom Roles Commands",
          },
          {
            label: "Media",
            value: "h9",
            emoji: "1209184808505319538",
            description: "See the Media Commands",
          },
          {
            label: "Games",
            value: "h10",
            emoji: "1209183749330173972",
            description: "See the Games Commands",
          },
          {
            label: "Utility",
            value: "h11",
            emoji: "1209191962381520906",
            description: "See the Utility Commands",
          },
        ]),
    );

    const disabledMenuOptions = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("helpOption2")
        .setPlaceholder("Choose wisely, shape your destiny.")
        .addOptions([
          {
            label: "Home",
            value: "h31",
            emoji: "1209335188543373312",
            description: "See Home Page",
          },
        ])
        .setDisabled(true),
    );

    const embed1 = new MessageEmbed()
      .setColor(client.color)
      .setAuthor({
        name: `${message.guild.name}`,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setDescription(
        `Hey It's Me Lock N Loaded a  Multipurpose Bot With All The Features And Commands You Need With Over Powered Features Come Manage Your Server With Me\n\n<:KronixStarDia:1271057633356415050> __**Links**__\n - **[Support](https://discord.com/invite/1hp-services-dev-1176609613995589753)**\n - **[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1090012112325181520&permissions=8&scope=bot%20applications.commands)**`,
      )
      .addField(
        "<:MekoDoubleArrowRight:1266028930226192416> __Commands__",
        `- ${emoji.id.antinuke}\`:\`**Antinuke**\n- ${emoji.id.automod}\`:\`**Automod**\n- ${emoji.id.moderation}\`:\`**Moderation**\n- ${emoji.id.welcome}\`:\`**Welcome**\n- ${emoji.id.ignore}\`:\`**Server**\n- ${emoji.id.voiceroles}\`:\`**VoiceRoles**\n- ${emoji.id.customroles}\`:\`**Custom Role**\n- ${emoji.id.media}\`:\`**Media**\n- ${emoji.id.games}\`:\`**Games**\n- ${emoji.id.utility}\`:\`**Utility**\n\`Choose From The Dropdown Below\``,
        false,
      );

    const embed2 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.antinuke} Antinuke Commands`,
        "`antinuke`, `antinuke guide`, `antinuke features`, `antinuke enable/disable`, `antinuke <event create/delete/update> enable/disable`, `antinuke whitelist add/remove <user mention/id>`, `antinuke whitelist reset`, `antinuke config`, `antinuke reset`, `nightmode`, `nightmode enable/disable`, `nightmode role add/remove <role mention/id>`, `nightmode bypass add/remove <user mention/id>`, `nightmode role/bypass show`, `nightmode role/bypass reset`",
      );

    const embed3 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.automod} Automod Commands`,
        "`antilink`, `antilink enable`, `antilink disable`, `antieveryone`, `antieveryone enable`, `antieveryone disable`, ` automod anti pornography enable/disable`, `automod anti message spam enable/disable`, `automod anti mention spam enable/disable`, `automod anti toxicity enable/disable`, `automod config`, `automod reset`",
      );

    const embed4 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.moderation} Moderation Commands`,
        "`clear bots`, `clear humans`, `clear embeds`, `clear files`, `clear mentions`, `clear pins`, `ban <user>`, `unban <user>`, `kick <user>`, `hide <channel>`, `unhide <channel>`, `lock <channel>`, `unlock <channel>`, `nuke`, `purge`, `voice`, `voice muteall`, `voice unmuteall`, `voice deafenall`, `voice undeafenall`, `voice mute <user>`, `voice unmute <user>`, `voice deafen <user>`, `voice undeafen <user>`",
      );

    const embed5 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.welcome} Welcome Commands`,
        "`welcome`, `welcome message panel`, `welcome test`, `welcome reset`, `autorole`, `autorole humans add <role mention/id>`, `autorole humans remove <role mention/id>`, `autorole bots add <role mention/id>`, `autorole bots remove <role mention/id>`, `autorole config`, `autorole reset`",
      );

    const embed6 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.ignore} Server Commands`,
        "`extra`, `extra owner add <user mention/id>`,  `extra admin add <user mention/id>`, `extra owner remove <user mention/id>`,  `extra admin remove <user mention/id>`, `extra owner show`, `extra admin show`, `extra owner reset`, `extra admin reset`, `ignore`, `ignore channel add <channel mention/id>`, `ignore bypass add <channel mention/id>`, `ignore channel remove <channel mention/id>`, `ignore bypass remove <channel mention/id>`, `ignore channel show`, `ignore bypass show`, `ignore channel reset`, `ignore bypass reset`",
      );

    const embed7 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.voiceroles} Voice Roles Commands`,
        "`invc`, `invc humans <role>`, `invc bots <role>`, `invc config`, `invc reset`",
      );

    const embed8 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.customroles} Custom Role Commands`,
        "`setup`, `setup config`, `setup reqrole <role mention/id>`, `setup admin <role mention/id>`, `setup official <role mention/id>`, `setup guest <role mention/id>`, `setup girl <role mention/id>`, `setup friend <role mention/id>`, `setup vip <role mention/id>`, `setup tag <tag>`, `setup stag <stag>`, `admin <user mention/id>`, `official <user mention/id>`, `guest <user mention/id>`, `girl <user mention/id>`, `friend <user mention/id>`, `vip <user mention/id>`, `setup reset`",
      );

    const embed9 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.media} Media Commands`,
        "`media`, `media channel add <channel mention/id>`, `media channel remove <channel mention/id>`, `media config`, `media reset`",
      );

    const embed10 = new MessageEmbed()
      .setColor(client.color)
      .addField(`${emoji.id.games} Games Commands`, "`dick`, `gay`, `nitro`");

    const embed11 = new MessageEmbed()
      .setColor(client.color)
      .addField(
        `${emoji.id.utility} Utility Commands`,
        "`afk`, `premium`, `premium redeem`, `premium status`, `premium purchase`, `premium features`, `embed create`, `code`, `help`, `info`, `invite`, `ping`, `privacy`, `terms`, `stats`, `uptime`, `vote`, `avatar user <user mention/id>`, `avatar server`, `banner <user mention/id>`, `serverbanner`, `google <query>`, `serverinfo`, `userinfo <user>`,`profile <user mention/id>`, `membercount`, `boostcount`, `rolecount`, `channelcount`, `emojicount`, `snipe`, `list bots`, `list bans`, `list admins`, `list inrole <role mention/id>`, `list boosters`, `list emojis`, `list roles`",
      );

    const embeds = [
      embed1,
      embed2,
      embed3,
      embed4,
      embed5,
      embed6,
      embed7,
      embed8,
      embed9,
      embed10,
      embed11,
    ];
    const totalPages = embeds.length;
    let currentPage = 0;

    const pag = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("first")
        .setEmoji("1209332345774284820")
        .setDisabled(true),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("previous")
        .setEmoji("1209332340719882240")
        .setDisabled(true),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("close")
        .setEmoji("1209332537554370590")
        .setDisabled(false),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("next")
        .setEmoji("1209332337872076850")
        .setDisabled(false),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("last")
        .setEmoji("1209332343203172412")
        .setDisabled(false),
    );

    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote")
        .setStyle("LINK")
        .setURL(`https://top.gg/bot/${client.user.id}/vote`),
      new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`,
        ),
      new MessageButton()
        .setLabel("Website")
        .setStyle("LINK")
        .setURL(`https://locknloaded.netlify.app/`),
    );

    const disabledPagg = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("first")
        .setEmoji("1209332345774284820")
        .setDisabled(true),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("previous")
        .setEmoji("1209332340719882240")
        .setDisabled(true),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("close")
        .setEmoji("1209332537554370590")
        .setDisabled(false),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("next")
        .setEmoji("1209332337872076850")
        .setDisabled(false),
      new MessageButton()
        .setStyle("SECONDARY")
        .setCustomId("last")
        .setEmoji("1209332343203172412")
        .setDisabled(false),
    );

    async function generateEmbed() {
      const embed = embeds[currentPage];
      embed.setFooter(
        `Thanks For Choosing Lock N Loaded`,
        arypton.displayAvatarURL({ dynamic: true }),
      );
      return embed;
    }

    async function sendMessage() {
      const embed = await generateEmbed();
      const messageComponent = await message.channel.send({
        embeds: [embed],
        components: [pag, menuOptions],
      });
      return messageComponent;
    }

    async function updatePaginationButtons() {
      const firstButton = pag.components.find(
        (component) => component.customId === "first",
      );
      const backButton = pag.components.find(
        (component) => component.customId === "previous",
      );
      const nextButton = pag.components.find(
        (component) => component.customId === "next",
      );
      const lastButton = pag.components.find(
        (component) => component.customId === "last",
      );

      firstButton.setDisabled(currentPage === 0);
      backButton.setDisabled(currentPage === 0);
      nextButton.setDisabled(currentPage === totalPages - 1);
      lastButton.setDisabled(currentPage === totalPages - 1);
    }

    async function handleInteraction(interaction) {
      if (interaction.isButton()) {
        if (interaction.customId === "next") {
          if (currentPage < totalPages - 1) {
            currentPage++;
          }
        } else if (interaction.customId === "previous") {
          if (currentPage > 0) {
            currentPage--;
          }
        } else if (interaction.customId === "first") {
          currentPage = 0;
        } else if (interaction.customId === "last") {
          currentPage = totalPages - 1;
        } else if (interaction.customId === "close") {
          messageComponent.edit({
            components: [disabledPagg, disabledMenuOptions],
          });
          return;
        }

        const updatedEmbed = await generateEmbed();
        updatePaginationButtons();

        interaction.update({
          embeds: [updatedEmbed],
          components: [pag, menuOptions],
        });
      } else if (interaction.isSelectMenu()) {
        switch (interaction.values[0]) {
          case "h1":
            currentPage = 0;
            break;
          case "h2":
            currentPage = 1;
            break;
          case "h3":
            currentPage = 2;
            break;
          case "h4":
            currentPage = 3;
            break;
          case "h5":
            currentPage = 4;
            break;
          case "h6":
            currentPage = 5;
            break;
          case "h7":
            currentPage = 6;
            break;
          case "h8":
            currentPage = 7;
            break;
          case "h9":
            currentPage = 8;
            break;
          case "h10":
            currentPage = 9;
            break;
          case "h11":
            currentPage = 10;
            break;
          default:
            currentPage = 0;
        }

        updatedEmbed = await generateEmbed();
        updatePaginationButtons();
      }

      interaction.update({
        embeds: [updatedEmbed],
        components: [pag, menuOptions],
      });
    }

    const messageComponent = await sendMessage();

    const collector = messageComponent.createMessageComponentCollector({
      filter: (interaction) => {
        if (message.author.id === interaction.user.id) return true;
        else {
          return interaction.reply({
            content: `${emoji.util.cross} | This Pagination is not for you.`,
            ephemeral: true,
          });
        }
      },
      time: 200000,
      idle: 300000 / 2,
    });

    collector.on("collect", async (interaction) => {
      await handleInteraction(interaction);
    });

    collector.on("end", async () => {
      const disabledPag = new MessageActionRow().addComponents(
        new MessageButton()
          .setStyle("SECONDARY")
          .setCustomId("first")
          .setEmoji("1209332345774284820")
          .setDisabled(true),
        new MessageButton()
          .setStyle("SECONDARY")
          .setCustomId("previous")
          .setEmoji("1209332340719882240")
          .setDisabled(true),
        new MessageButton()
          .setStyle("SECONDARY")
          .setCustomId("close")
          .setEmoji("1209332537554370590")
          .setDisabled(true),
        new MessageButton()
          .setStyle("SECONDARY")
          .setCustomId("next")
          .setEmoji("1209332337872076850")
          .setDisabled(true),
        new MessageButton()
          .setStyle("SECONDARY")
          .setCustomId("last")
          .setEmoji("1209332343203172412")
          .setDisabled(true),
      );

      messageComponent.edit({ components: [disabledPag, disabledMenuOptions] });
    });
  },
};
