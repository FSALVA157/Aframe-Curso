import { createBrowserRouter } from "react-router-dom";
import { PrincipalLayout } from "../components/layouts/PrincipalLayout";
import { ProtectedLayout } from "../components/layouts/ProtectedLayout";
import { DesignerComponent } from "../../experiencia360/components/Designer";
import { AnaliticasComponent } from "../../analiticas/components/Analiticas";
import { PlayerComponent } from "../../experiencia360/components/Player";
import { PlayerAnimateBasicComponent } from "../../experiencia360/components/PlayerAnimateBasic";
import { PlayerLightsShadows } from "../../experiencia360/components/PlayerLightsShadows";


export const routes = createBrowserRouter([

    {
        path: "/",
        element: <PrincipalLayout/>,
        children: [
            {
                index: true,
                element: <ProtectedLayout>
                    <DesignerComponent/>
                </ProtectedLayout>
            },
            {
                path: "analiticas",
                element: <ProtectedLayout>
                    <AnaliticasComponent/>
                </ProtectedLayout>
            }
        ]
            
    },
    {
        path: "player",
        element: <PlayerComponent/>
    },
    {
        path: "animate-basic",
        element: <PlayerAnimateBasicComponent/>
    },
    {
        path: "player-sky",
        element: <PlayerComponent/>
    },
    {
        path: "player-textures",
        element: <PlayerComponent/>
    },
    {
        path: "player-lights-shadows",
        element: <PlayerLightsShadows/>
    }
    
])