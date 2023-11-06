import chalk from "chalk";
import inquirer from "inquirer";
//classes Player & Opponent
class Player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel =this.fuel - 25
        this.fuel=fuel
    }
    fuelIncrease(){
     this.fuel = 100  
    }
}
class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name ;
}
fuelDecrease(){
    let fuel =this.fuel - 25
    this.fuel=fuel
}
}
//Payer name & Opponent select
let player=await inquirer.prompt({
    type:"input",
    name:"name",
    message:"please enter your name:"
})

let opponent=await inquirer.prompt({
type:"list",
name:"select",
message:"select your opponent",
choices:["Skeleton","Assasin","Zombie"]

})
//Gather data
let p1=new Player(player.name);
let o1=new Opponent(opponent.select);

do{
    //skeleton
    if (opponent.select=="Skeleton"){
        let ask =await inquirer.prompt({
           type:"list",
           name:"opt",
           message:"select your opponent",
           choices:["Attack","Drink Portion","Run For Your Life.."] ,
        });
        if(ask.opt=="Attack"){
            let num =Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You loose, Better luck next time"));
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0){
                    console.log(chalk.green.bold.italic("You win"));
                   process.exit()
                    
                }
            
            
        }
        if(ask.opt=="Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
            
            
        }
        if(ask.opt=="Run For Your Life.."){
            console.log(chalk.red.bold.italic("You loose,better luck next time"));
            process.exit()
        }
    }
    
    
}
// assasin

if (opponent.select=="Assasin"){
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask =await inquirer.prompt({
       type:"list",
       name:"opt",
       message:"select your opponent",
       choices:["Attack","Drink Portion","Run For Your Life.."] ,
    });
    if(ask.opt=="Attack"){
        let num =Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            
    
            }
        
        
    }
    if(ask.opt=="Drink Portion"){
        p1.fuelIncrease()
        if (opponent.select=="Skeleton"){
            let ask =await inquirer.prompt({
               type:"list",
               name:"opt",
               message:"select your opponent",
               choices:["Attack","Drink Portion","Run For Your Life.."] ,
            });
            if(ask.opt=="Attack"){
                let num =Math.floor(Math.random() * 2)
                if(num > 0){
                    p1.fuelDecrease()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                    if(p1.fuel <= 0){
                        console.log(chalk.red.bold.italic("You loose, Better luck next time"));
                        process.exit()
                    }
                }
                if(num <= 0){
                    o1.fuelDecrease()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                    if(o1.fuel <= 0){
                        console.log(chalk.green.bold.italic("You win"));
                       process.exit()
                        
                    }
                
                
            }
            if(ask.opt=="Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
                
                
            }
            if(ask.opt=="Run For Your Life.."){
                console.log(chalk.red.bold.italic("You loose,better luck next time"));
                process.exit()
            }
        }
        
        
    } 
    }
    if(ask.opt=="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You loose, Better luck next time"));
        
    }
}
// zombie
if (opponent.select=="Zombie"){
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask =await inquirer.prompt({
       type:"list",
       name:"opt",
       message:"select your opponent",
       choices:["Attack","Drink Portion","Run For Your Life.."] ,
    });
    if(ask.opt=="Attack"){
        let num =Math.floor(Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        }
        if(num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            
    
            }
        
        
    }
    if(ask.opt=="Drink Portion"){
        p1.fuelIncrease()
        if (opponent.select=="Skeleton"){
            let ask =await inquirer.prompt({
               type:"list",
               name:"opt",
               message:"select your opponent",
               choices:["Attack","Drink Portion","Run For Your Life.."] ,
            });
            if(ask.opt=="Attack"){
                let num =Math.floor(Math.random() * 2)
                if(num > 0){
                    p1.fuelDecrease()
                    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                    if(p1.fuel <= 0){
                        console.log(chalk.red.bold.italic("You loose, Better luck next time"));
                        process.exit()
                    }
                }
                if(num <= 0){
                    o1.fuelDecrease()
                    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                    if(o1.fuel <= 0){
                        console.log(chalk.green.bold.italic("You win"));
                       process.exit()
                        
                    }
                
                
            }
            if(ask.opt=="Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
                
                
            }
            if(ask.opt=="Run For Your Life.."){
                console.log(chalk.red.bold.italic("You loose,better luck next time"));
                process.exit()
            }
        }
        
        
    } 
    }
    if(ask.opt=="Run For Your Life.."){
        console.log(chalk.red.bold.italic("You loose, Better luck next time"));
        
    }
}
}
while(true)