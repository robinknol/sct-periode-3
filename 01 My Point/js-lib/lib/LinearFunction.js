class LinearFunction
{
    constructor(slope, intercept)
    {
        this.slope = slope;
        this.intercept = intercept;
    }

    y(x)
    {
        return x * this.slope + this.intercept
    }

    throughTwoPoints(A,B)
    {
        let dx = B.dx - A.dx;
        let dy = B.dy - A.dy;

        this.slope = dy/dx;
        this.intercept = A.dy - this.slope * A.dx;
    }

    intersection(line)
    {
        let ans = {}
        ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
        ans.y = this.y(ans.x);
        return ans;
    }

    draw(context)
    {
        // context.strokeStyle = getRandomColor();
        context.moveTo(0,this.y(0));
        context.lineTo(canvas.width,this.y(canvas.width));
        context.stroke();
    }
}