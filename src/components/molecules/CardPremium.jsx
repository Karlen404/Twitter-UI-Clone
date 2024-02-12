import Button from "../atoms/Button"

function CardPremium() {
  return (
    <div className="text-white bg-[#16181C] rounded-2xl">
      <div className="grid gap-2 px-4 py-2">
        <h3 className="text-xl font-bold">Premium Subscription</h3>
        <p>Subscribe to access new features and, if eligible, receive a revenue share of advertising revenue.</p>
        <div>
          <Button title="Subscribe" />
        </div>
      </div>
    </div>
  )
}

export default CardPremium