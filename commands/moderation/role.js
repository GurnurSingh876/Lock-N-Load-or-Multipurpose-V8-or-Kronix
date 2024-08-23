
const emoji = require('../../emoji.js');

module.exports = {
    name: 'role',
    run: async (client, message, args) => {

        const role = message.guild.roles.cache.find((r) => r.name === args.slice(1).join(' ')) || message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        const executorHighestRole = message.member.roles.highest;
        switch (args[0]) {
            case 'humans':
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }
                if (!role) return message.channel.send('Role not found.');

                const members = message.guild.members.cache.filter((member) => !member.user.bot);

                members.forEach((member) => {

                    member.roles.add(role);

                });

                message.channel.send(`Added the "${role.name}" role to all humans.`);

                break;

            case 'bots':
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }
                const botRole = message.guild.roles.cache.find((r) => r.name === args.slice(1).join(' '));
                if (!botRole) return message.channel.send('Role not found.');

                if (botRole.comparePositionTo(executorHighestRole) >= 0 || botRole.comparePositionTo(message.guild.me.roles.highest) >= 0) {
                    return message.channel.send('You can\'t add a role higher or equal to your own or the bot\'s highest role.');
                }

                const botMembers = message.guild.members.cache.filter((member) => member.user.bot);
                botMembers.forEach((member) => {
                    member.roles.add(botRole);
                });

                message.channel.send(`Added the "${botRole.name}" role to all bots.`);
                break;

            case 'all':
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }
                const allRole = message.guild.roles.cache.find((r) => r.name === args.slice(1).join(' '));
                if (!allRole) return message.channel.send('Role not found.');

                if (allRole.comparePositionTo(executorHighestRole) >= 0 || allRole.comparePositionTo(message.guild.me.roles.highest) >= 0) {
                    return message.channel.send('You can\'t add a role higher or equal to your own or the bot\'s highest role.');
                }

                const allMembers = message.guild.members.cache;
                allMembers.forEach((member) => {
                    member.roles.add(allRole);
                });

                message.channel.send(`Added the "${allRole.name}" role to all users.`);
                break;

            case 'status':
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }
                message.channel.send('Role addition process status: ' + roleStatus.addingRole);
                break;

            case 'cancel':
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }    
            roleStatus.addingRole = false;
                message.channel.send('Role addition process canceled.');
                break;

            default:
                if (!message.member.permissions.has('ADMINISTRATOR')) {
                    let error = new MessageEmbed()
                        .setColor("RED")
                        .setDescription(
                            `You must have \`Administrator\` permission to use this command.`
                        )
                    return message.channel.send({ embeds: [error] })
                }
                if (
                    !own &&
                    message.member.roles.highest.position <=
                        message.guild.me.roles.highest.position
                ) {
                    return message.channel.send({
                        embeds: [
                            new MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    `You must have a higher role than me to use this command.`
                                )
                        ]
                    })
                }    
            message.channel.send('Invalid sub-command. Usage: ?role [humans | bots | status | all | cancel] <role>');
        }
    },
};
