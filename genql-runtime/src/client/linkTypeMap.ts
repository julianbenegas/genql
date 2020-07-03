import { LinkedField, LinkedType, LinkedTypeMap, TypeMap } from '../types'

export const linkTypeMap = (typeMap: TypeMap) => {
    const linkedTypeMap = <LinkedTypeMap>JSON.parse(JSON.stringify(typeMap))

    Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
        const type: LinkedType = linkedTypeMap[typeNameFromKey]
        type.name = typeNameFromKey
        if (!type.fields) {
            return
        }

        const fields = type.fields

        Object.keys(fields).forEach((f) => {
            const field: LinkedField = fields[f]

            if (field.args) {
                const args = field.args
                Object.keys(args).forEach((key) => {
                    const arg = args[key]

                    if (arg) {
                        const [, typeName] = arg

                        if (typeof typeName === 'string') {
                            if (!linkedTypeMap[typeName]) {
                                linkedTypeMap[typeName] = { name: typeName }
                            }

                            arg[1] = <LinkedType>linkedTypeMap[typeName]
                        }
                    }
                })
            }

            const typeName = <LinkedType | string>field.type

            if (typeof typeName === 'string') {
                if (!linkedTypeMap[typeName]) {
                    linkedTypeMap[typeName] = { name: typeName }
                }

                field.type = <LinkedType>linkedTypeMap[typeName]
            }
        })
    })

    return linkedTypeMap
}
