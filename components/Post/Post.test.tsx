import { render, screen } from "@testing-library/react";
import { MOCK_API_DATA } from "../../api/mockData";
import { Post } from "./Post";
import user from '@testing-library/user-event';

describe("Post", () => {
  it("renders a component", () => {
    let MOCK_POST_DATA = MOCK_API_DATA[0];
    render(<Post data={MOCK_POST_DATA} />);
    const image = screen.getByAltText('woman in black bikini lying on white surfboard on swimming pool during daytime');
    expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo-1581610489881-f316ffcf0424?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMzQ4OTN8MHwxfGNvbGxlY3Rpb258MXwzMTc0NTcxfHx8fHwyfHwxNjcwNjk1MTc5\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200')
  });

  user.setup();
  it("mark as favorite", async () => {
    let MOCK_POST_DATA = MOCK_API_DATA[0];
    render(<Post data={MOCK_POST_DATA} />);

    const likeButton = screen.getByAltText('mark as favourite');
    expect(likeButton).toBeInTheDocument();
    await user.click(likeButton);

    const unLikeButton = screen.getByAltText('mark as normal');
    expect(unLikeButton).toBeInTheDocument();
  })
});
