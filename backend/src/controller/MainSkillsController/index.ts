import { Request, Response } from "express";
import mainskills from "../../models/mainskills";
import { MainSkills } from "../Class/MainSkills";
const MainSkillsModel = mainskills();

export class MainSkillsController {

    public static async index(req:Request, res:Response){
        const id:any = req.query.id;
        let response:any;
        try{
            if (id) response = await MainSkillsModel.findByPk(id);
            else response = await MainSkillsModel.findAll();
            res.status(200).json(response);
        }
        catch(err){
            if(err) console.log(err);
            res.status(500).json({msg:"Can't push all skills"});
        }
    }

    public static async create(req:Request, res:Response){
        const {mainImage, title, description, links, timeExperience} = req.body;
        const newMainSkill = new MainSkills(mainImage, title, description, links, timeExperience);
        const status:number = newMainSkill.save(MainSkillsModel);
        const msg:string = status === 200 ? '[Success] New skill created successfully' : "[ERROR] Can't create new skill";
        res.status(status).json({msg});
    }

    public static async update(req:Request, res:Response){
        const {id, mainImage, title, description, links, timeExperience} = req.body;
        try{
            await MainSkillsModel.update({
                id,
                mainImage,
                title,
                description,
                links,
                timeExperience
            },
            {where:{id}});
            res.status(200).json({msg:"[Success] skill changed successfully"});
        }
        catch(err){
            if(err) console.log(err);
            res.status(500).json({msg:"[ERROR] Can't update this record."});
        }
    }

    public static async delete(req:Request, res:Response){
        const { id } = req.params;
        try{
            await MainSkillsModel.destroy({where:{id}});
            res.status(200).json({msg:"[Success] Skill deleted successfully"});
        }
        catch(err){
            res.status(500).json({msg:"[ERROR] Can't delete this skill"});
        }
    }

}