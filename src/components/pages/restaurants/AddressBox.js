function AddressBox(props) {
  const {branch, activeBranch, onChangeBranch} = props;

  return (
    <div className={`address-box ${activeBranch.name === branch.name ? 'address-box__selected' : ''}`} onClick={() => onChangeBranch(branch)}>
      <h3 className="branch-name">{branch.name}</h3>
      <span className="address">{branch.address}</span>
      <span className="work-hours">
        <i className="far fa-clock"></i>
        {branch.hours}
      </span>
    </div>
  );
}

export default AddressBox;