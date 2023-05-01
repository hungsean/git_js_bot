import {REST, version, Routes} from "discord.js"


const updateSlashCommands = () =>{
    const rest = new REST({version: 10}).setToken(process.env.TOKEN)
    rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            '1095012848872210576'
            
            ),

        )

}

const loadCommands = () =>{
    
}