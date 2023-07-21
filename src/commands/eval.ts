export default {
    name: "eval",
    owner: true,
    aliases: [],
    permissions: [],
    enabled: true,
    async execute(client, message, args){
        eval(args.join(" "));
    }
}