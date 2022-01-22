import { Guess_Age } from "./guess_age.modal.js"

// Save Guess Age data
export const guessAgeSave = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const { email, age, month, day, date } = req.body;
        await Guess_Age.create({
            email, age, month, day, date
        })
        return res.send({
            status: 201,
            success: true,
            message: "Guess Age data added successfully"
        });
    } catch (error) {
        res.send({
            status: 404,
            success: false,
            message: "Oops Some error occured" + error
        })
    }
}

export const fetchHistory = async (req, res) => {
    try {

        const email = req.body.email;
        const history = await Guess_Age.find({ email: email })

        if (!history) {
            res.send({
                code: 404,
                success: false,
                message: 'Not fetch any data'
            })
        }

        res.send({
            code: 201,
            success: true,
            message: 'Data fetch successfully',
            data: history
        })

    } catch (error) {
        res.send({
            code: 401,
            success: false,
            message: 'Oops error throw' + error
        })
    }
}