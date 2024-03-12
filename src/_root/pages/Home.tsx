import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/loading";


interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string,
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:4000/recipes")
        const data = await response.json();

        //delay response
        await new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })



        setRecipes(data)
        setIsLoading(false);


        console.log(data);
      } catch (error) {
        console.log(error);

      }
    }
    fetchRecipes()
  }, [])
  console.log(isLoading);
  return <>
    {isLoading ? (<Loading/>) : (
      <div className="grid grid-cols-3 gap-8">
        {recipes?.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} />
                <AvatarFallback>
                  {recipe.title.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>
                  {recipe.title}
                </CardTitle>
                <CardDescription>
                  {recipe.time} mins to cook
                </CardDescription>
              </div>
            </CardHeader >
            <CardContent>
              <p>
                {recipe.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary">View Recipe</Button>
              {recipe.vegan && <Badge>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    )}
  </>
};

export default Home;
