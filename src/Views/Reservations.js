import AppButton from "../Components/AppButton";
import AppTable, { AppTBody, AppTr, AppTd } from "../Components/AppTable";


const headings = [
    {
        text: "Text",
        slug: "text"
    },
    {
        text: "Text",
        slug: "text-1"
    },
    {
        text: "Text",
        slug: "text-2"
    },
    {
        text: "Text",
        slug: "text-3"
    }
];



function Reservations() {
    return (
        <div className="container m-auto px-8">
            <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">Reservations</h1>
                <AppButton>
                    <span>
                        New Reservation
                    </span>
                </AppButton>
            </div>
            <AppTable headings={headings}>
                <AppTBody>
                    <AppTr>
                        <AppTd>
                            Content
                        </AppTd>
                        <AppTd>
                            Content
                        </AppTd>
                        <AppTd>
                            Content
                        </AppTd>
                        <AppTd>
                            Content
                        </AppTd>
                    </AppTr>
                </AppTBody>
            </AppTable>
        </div>
    );
}

export default Reservations;