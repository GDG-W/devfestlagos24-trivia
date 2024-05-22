export interface IPageButton {
    isActive: boolean;
    name: string;
  }

export const PageButtons:IPageButton[] =[
    {name : "Play Game", isActive : true},
    {name : "Leaderboard", isActive : false},
]