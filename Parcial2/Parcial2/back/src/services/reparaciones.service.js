
import sequelize from "../models/database.js"

const getAll = async () => {
    const resultado = await sequelize.models.Reparaciones.findAll({
        order: [['Dni', 'ASC']]
    })
    return resultado.map(p => {
        return {
            Id: p.dataValues.Id,
            Dni: p.dataValues.Dni,
            FechaIngreso: p.dataValues.FechaIngreso,
            TipoElectrodomestico: p.dataValues.TipoElectrodomestico,
            Reparado: p.dataValues.Reparado,
            Diagnostico: p.dataValues.Diagnostico
        }
    })
}

const create = async (orden) => {

    console.log(orden)
    const resultado = await sequelize.models
    .Reparaciones.create({
        Dni: orden.Dni,
        FechaIngreso: orden.FechaIngreso,
        TipoElectrodomestico: orden.TipoElectrodomestico,
        Reparado: orden.Reparado, 
        Diagnostico: orden.Diagnostico
    })
    
    return {
        Id: resultado.dataValues.Id,
    };

}

export default  {
    getAll,
    create,
}