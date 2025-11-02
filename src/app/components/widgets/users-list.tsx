import { getUsers } from "@/app/utils/actions"
import SelectUser from "../features/select-user"

export default async function UsersList()
{

    const users = await getUsers() || [] 

    return(
        <div>
            {
                users.map((item) => (
                    <div key={item.id} className="flex gap-5">
                        <div className="flex gap-5">
                            <div>
                                {item.id}
                            </div>
                            <div>
                                {item.username}
                            </div>
                        </div>
                        <div>
                            <SelectUser id={item.id}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
