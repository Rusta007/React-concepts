
export default function Parent() {
    const [parentCount, setParentCount] = useState(0);
  
    return (
      <div>
        <button
          onClick={() => setParentCount(current => current + 1)}
        >
          Parent count: {parentCount}
        </button>
  
        <hr />
  
        <Child parentCount={parentCount} />
      </div>
    );
  }